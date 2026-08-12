import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import { PrismaClient } from "../prisma/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

/**
 * Fully refreshes the Postgres database from src/data/ — the JSON files are
 * the source of truth; this script makes the DB exactly reflect them.
 * Safe to re-run any time after `npm run scrape:league`.
 *
 * Usage: npm run db:import
 */

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const DATA_DIR = path.join(process.cwd(), "src", "data");

type RawOwner = { id: string; name: string; teamName: string; logoUrl?: string };
type RawMatchup = { id: string; homeOwnerId: string; awayOwnerId: string; homeScore: number; awayScore: number; isPlayoff?: boolean };
type RawWeek = { week: number; matchups: RawMatchup[] };
type RawSeasonFile = { season: number; weeks: RawWeek[] };
type RawRosterPlayer = { slot: string; name: string; position: string; nflTeam: string; points: number; starter: boolean };
type RawFinalRoster = { week: number; teamId: string; teamName: string; place?: number; players: RawRosterPlayer[] };
type RawRostersFile = { season: number; rosters: Record<string, RawFinalRoster> };

function listAvailableSeasons(): number[] {
  return fs
    .readdirSync(DATA_DIR)
    .map((f) => f.match(/^(\d{4})-season\.json$/))
    .filter((m): m is RegExpMatchArray => m !== null)
    .map((m) => parseInt(m[1], 10))
    .sort((a, b) => a - b);
}

async function main() {
  await prisma.$connect();
  console.log("✓ Connected to database");

  const seasons = listAvailableSeasons();
  console.log(`Seasons found: ${seasons.join(", ")}`);

  console.log("→ Clearing existing data (full refresh from JSON)...");
  await prisma.rosterPlayer.deleteMany({});
  await prisma.seasonTeam.deleteMany({});
  await prisma.matchup.deleteMany({});
  await prisma.owner.deleteMany({});

  const owners: RawOwner[] = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "owners.json"), "utf8"));
  await prisma.owner.createMany({
    data: owners.map((o) => ({ id: o.id, name: o.name, teamName: o.teamName, logoUrl: o.logoUrl })),
  });
  console.log(`✅ Imported ${owners.length} owners`);

  for (const season of seasons) {
    const seasonFile: RawSeasonFile = JSON.parse(
      fs.readFileSync(path.join(DATA_DIR, `${season}-season.json`), "utf8")
    );
    const matchupRows = seasonFile.weeks.flatMap((w) =>
      w.matchups.map((m) => ({
        id: m.id,
        season,
        week: w.week,
        homeOwnerId: m.homeOwnerId,
        awayOwnerId: m.awayOwnerId,
        homeScore: m.homeScore,
        awayScore: m.awayScore,
        isPlayoff: m.isPlayoff ?? false,
      }))
    );
    await prisma.matchup.createMany({ data: matchupRows });
    console.log(`✅ Season ${season}: ${matchupRows.length} matchups`);

    const rostersPath = path.join(DATA_DIR, "rosters", `${season}.json`);
    if (!fs.existsSync(rostersPath)) continue;
    const rostersFile: RawRostersFile = JSON.parse(fs.readFileSync(rostersPath, "utf8"));

    let teamCount = 0;
    let playerCount = 0;
    for (const [ownerId, roster] of Object.entries(rostersFile.rosters)) {
      const seasonTeam = await prisma.seasonTeam.create({
        data: {
          season,
          ownerId,
          teamId: roster.teamId,
          teamName: roster.teamName,
          week: roster.week,
          place: roster.place ?? null,
        },
      });
      teamCount += 1;

      if (roster.players.length > 0) {
        await prisma.rosterPlayer.createMany({
          data: roster.players.map((p) => ({
            seasonTeamId: seasonTeam.id,
            slot: p.slot,
            name: p.name,
            position: p.position,
            nflTeam: p.nflTeam,
            points: p.points,
            starter: p.starter,
          })),
        });
        playerCount += roster.players.length;
      }
    }
    console.log(`✅ Season ${season}: ${teamCount} season-teams, ${playerCount} roster players`);
  }

  console.log("🎉 Done!");
}

main()
  .catch((err) => {
    console.error("❌ Error:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
