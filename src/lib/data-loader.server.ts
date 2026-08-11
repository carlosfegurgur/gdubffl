import fs from "fs";
import path from "path";

export type Owner = { id: string; name: string; teamName: string; logoUrl?: string };
export type Matchup = {
  id: string;
  homeOwnerId: string;
  homeOwnerName?: string;
  awayOwnerId: string;
  awayOwnerName?: string;
  homeScore: number;
  awayScore: number;
  isPlayoff?: boolean;
  date?: string;
  week?: number;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Week = { week: number; matchups: Matchup[]; teamStats?: Record<string, any> };
export type SeasonFile = { season: number; weeks: Week[] };

export type RosterPlayer = {
  slot: string;
  name: string;
  position: string;
  nflTeam: string;
  points: number;
  starter: boolean;
};
export type FinalRoster = { week: number; teamId: string; teamName: string; players: RosterPlayer[] };
export type RostersFile = { season: number; rosters: Record<string, FinalRoster> };

const DATA_DIR = path.join(process.cwd(), "src", "data");

export function loadOwners(): Owner[] {
  const file = path.join(DATA_DIR, "owners.json");
  const raw = fs.readFileSync(file, "utf8");
  return JSON.parse(raw) as Owner[];
}

export function loadSeason(season: number): SeasonFile {
  const file = path.join(DATA_DIR, `${season}-season.json`);
  const raw = fs.readFileSync(file, "utf8");
  return JSON.parse(raw) as SeasonFile;
}

/** Final-week rosters for a season, keyed by ownerId. Loaded separately from
 * owners.json so pages that don't need roster detail (most of them) don't
 * pay for parsing it. */
export function loadFinalRosters(season: number): RostersFile {
  const file = path.join(DATA_DIR, "rosters", `${season}.json`);
  const raw = fs.readFileSync(file, "utf8");
  return JSON.parse(raw) as RostersFile;
}

/** Flatten all matchups across weeks */
export function loadAllMatchups(season: number): Matchup[] {
  const s = loadSeason(season);
  const arr: Matchup[] = [];
  s.weeks.forEach((w) => {
    w.matchups.forEach((m) => {
      arr.push({ ...m, week: w.week });
    });
  });
  return arr;
}
