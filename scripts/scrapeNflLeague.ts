import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

/**
 * Scrapes a public fantasy.nfl.com league's history pages and writes:
 *   - src/data/owners.json            lightweight owner identity (id/name/teamName/logo)
 *   - src/data/<season>-season.json   matchups/scores for that season
 *   - src/data/rosters/<season>.json  final-week rosters, keyed by ownerId
 *
 * Roster data is kept out of owners.json on purpose: owners.json is loaded
 * on every page that needs a team name (see src/lib/data-loader.server.ts),
 * so it needs to stay small. Roster files are only loaded by whatever page
 * actually needs roster detail.
 *
 * Usage:
 *   npm run scrape:league -- --league 940973 --season 2025
 *   npm run scrape:league -- --league 940973 --seasons 2012-2025
 *
 * Regular-season length (used to flag isPlayoff) is auto-detected per
 * season from the standings page's "Reg. Season: W-L-T" record, since it
 * has changed across this league's history (13 weeks some years, 14 in
 * others). Override with --regularSeasonWeeks if auto-detection fails.
 */

/**
 * Some managers have played under more than one NFL.com account over the
 * league's history (e.g. after losing access to an old login), which the
 * scraper would otherwise treat as separate owners. Map each alias userId
 * to the canonical one so they consolidate into a single owner everywhere
 * (owners.json, matchups, rosters).
 */
const OWNER_ID_ALIASES: Record<string, string> = {
  "8027127": "36060149", // JR — "Han and Chubbaka" (2014-2018) -> canonical "JR Untalan" (2025)
  "25292913": "36060149", // JR — "Shawty u Etienne" (2021-2024) -> canonical "JR Untalan" (2025)
};

function resolveOwnerId(rawId: string): string {
  return OWNER_ID_ALIASES[rawId] ?? rawId;
}

type Args = {
  league: string;
  seasons: number[];
  regularSeasonWeeksOverride?: number;
  skipRosters: boolean;
};

type RosterPlayer = {
  slot: string; // roster slot, e.g. QB, RB, WR, TE, FLEX, K, DEF, DB, DL, LB, or BN for bench
  name: string;
  position: string; // player's real position, e.g. QB, RB
  nflTeam: string; // e.g. LAR
  points: number;
  starter: boolean;
};
type FinalRoster = { week: number; teamId: string; teamName: string; place?: number; players: RosterPlayer[] };
type ScrapedOwner = { id: string; name: string; teamName: string; logoUrl?: string };
type ScrapedMatchup = {
  id: string;
  homeOwnerId: string;
  homeOwnerName: string;
  awayOwnerId: string;
  awayOwnerName: string;
  homeScore: number;
  awayScore: number;
  isPlayoff: boolean;
};
type ScrapedWeek = { week: number; matchups: ScrapedMatchup[] };

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

function parseSeasonsArg(raw: string): number[] {
  const seasons: number[] = [];
  for (const part of raw.split(",")) {
    const rangeMatch = part.trim().match(/^(\d{4})-(\d{4})$/);
    if (rangeMatch) {
      const [, start, end] = rangeMatch;
      for (let y = parseInt(start, 10); y <= parseInt(end, 10); y++) seasons.push(y);
    } else if (/^\d{4}$/.test(part.trim())) {
      seasons.push(parseInt(part.trim(), 10));
    } else if (part.trim()) {
      throw new Error(`Unrecognized --seasons segment: "${part}"`);
    }
  }
  return [...new Set(seasons)].sort((a, b) => a - b);
}

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const get = (flag: string) => {
    const i = argv.indexOf(`--${flag}`);
    return i !== -1 ? argv[i + 1] : undefined;
  };

  const league = get("league");
  if (!league) throw new Error("Missing required --league <id>");

  const seasonsArg = get("seasons");
  const seasonArg = get("season");
  if (!seasonsArg && !seasonArg) {
    throw new Error("Provide either --season <year> or --seasons <start-end>");
  }
  const seasons = seasonsArg ? parseSeasonsArg(seasonsArg) : [parseInt(seasonArg!, 10)];

  const regularSeasonWeeksArg = get("regularSeasonWeeks");
  return {
    league,
    seasons,
    regularSeasonWeeksOverride: regularSeasonWeeksArg ? parseInt(regularSeasonWeeksArg, 10) : undefined,
    skipRosters: argv.includes("--skipRosters"),
  };
}

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`Fetch failed (${res.status}) for ${url}`);
  return res.text();
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type StandingsInfo = {
  regularSeasonWeeks: number | null;
  placementsByTeamId: Map<string, number>;
};

async function scrapeStandings(league: string, season: number): Promise<StandingsInfo> {
  const url = `https://fantasy.nfl.com/league/${league}/history/${season}/standings?gameSeason=${season}&leagueId=${league}`;
  const html = await fetchHtml(url);

  const recordMatch = html.match(/Reg\. Season:\s*(\d+)-(\d+)-(\d+)/);
  const regularSeasonWeeks = recordMatch
    ? parseInt(recordMatch[1], 10) + parseInt(recordMatch[2], 10) + parseInt(recordMatch[3], 10)
    : null;

  const $ = cheerio.load(html);
  const placementsByTeamId = new Map<string, number>();
  $('li[class^="place-"]').each((_, el) => {
    const $el = $(el);
    const placeText = $el.find(".place").first().text().trim(); // e.g. "1st Place"
    const placeMatch = placeText.match(/^(\d+)/);
    const teamClass = $el.find("a.teamName").first().attr("class") ?? "";
    const teamIdMatch = teamClass.match(/teamId-(\d+)/);
    if (placeMatch && teamIdMatch) {
      placementsByTeamId.set(teamIdMatch[1], parseInt(placeMatch[1], 10));
    }
  });

  return { regularSeasonWeeks, placementsByTeamId };
}

async function scrapeOwners(
  league: string,
  season: number
): Promise<Map<string, ScrapedOwner & { teamId: string }>> {
  const url = `https://fantasy.nfl.com/league/${league}/history/${season}/owners?leagueId=${league}`;
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const owners = new Map<string, ScrapedOwner & { teamId: string }>();

  $("tr[class^='team-']").each((_, row) => {
    const $row = $(row);
    const $teamLink = $row.find("a.teamName").first();
    const teamName = $teamLink.text().trim();
    const teamClass = $teamLink.attr("class") ?? "";
    const teamIdMatch = teamClass.match(/teamId-(\d+)/);
    const logoUrl = $row.find("img").first().attr("src");
    const $userSpan = $row.find(".teamOwnerName .userName").first();
    const userClass = $userSpan.attr("class") ?? "";
    const userIdMatch = userClass.match(/userId-(\d+)/);
    const ownerName = $userSpan.text().trim();

    if (!userIdMatch || !teamIdMatch || !teamName || !ownerName) return;

    const ownerId = resolveOwnerId(userIdMatch[1]);
    owners.set(ownerId, {
      id: ownerId,
      name: ownerName,
      teamName,
      logoUrl,
      teamId: teamIdMatch[1],
    });
  });

  if (owners.size === 0) {
    throw new Error(
      `No owners parsed for season ${season}. The site markup may have changed.`
    );
  }

  return owners;
}

async function scrapeWeek(
  league: string,
  season: number,
  week: number,
  regularSeasonWeeks: number
): Promise<ScrapedWeek | null> {
  const url = `https://fantasy.nfl.com/league/${league}/history/${season}/schedule?gameSeason=${season}&leagueId=${league}&scheduleDetail=${week}&scheduleType=week&standingsTab=schedule`;
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const matchups: ScrapedMatchup[] = [];

  $("li.matchup").each((i, el) => {
    const teamWraps = $(el).find(".teamWrap");
    if (teamWraps.length !== 2) return;

    const parseTeam = (wrapEl: Parameters<typeof $>[0]) => {
      const $wrap = $(wrapEl);
      const $userSpan = $wrap.find(".userName").first();
      const userClass = $userSpan.attr("class") ?? "";
      const userIdMatch = userClass.match(/userId-(\d+)/);
      const ownerName = $userSpan.text().trim();
      const scoreText = $wrap.find(".teamTotal").first().text().trim();
      return {
        ownerId: userIdMatch ? resolveOwnerId(userIdMatch[1]) : undefined,
        ownerName,
        score: parseFloat(scoreText),
      };
    };

    const home = parseTeam(teamWraps.get(0)!);
    const away = parseTeam(teamWraps.get(1)!);

    if (
      !home.ownerId ||
      !away.ownerId ||
      !home.ownerName ||
      !away.ownerName ||
      Number.isNaN(home.score) ||
      Number.isNaN(away.score)
    ) {
      console.warn(`  ⚠️ Skipping unparseable matchup ${i} in week ${week}`);
      return;
    }

    matchups.push({
      id: `m${season}-w${week}-${matchups.length + 1}`,
      homeOwnerId: home.ownerId,
      homeOwnerName: home.ownerName,
      awayOwnerId: away.ownerId,
      awayOwnerName: away.ownerName,
      homeScore: home.score,
      awayScore: away.score,
      isPlayoff: week > regularSeasonWeeks,
    });
  });

  if (matchups.length === 0) return null;
  return { week, matchups };
}

type FinalWeekPairing = {
  homeTeamId: string;
  homeOwnerId: string;
  awayTeamId: string;
  awayOwnerId: string;
};

async function scrapeFinalWeekPairings(
  league: string,
  season: number,
  week: number
): Promise<FinalWeekPairing[]> {
  const url = `https://fantasy.nfl.com/league/${league}/history/${season}/schedule?gameSeason=${season}&leagueId=${league}&scheduleDetail=${week}&scheduleType=week&standingsTab=schedule`;
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const pairings: FinalWeekPairing[] = [];

  $("li.matchup").each((_, el) => {
    const teamWraps = $(el).find(".teamWrap");
    if (teamWraps.length !== 2) return;

    const parseSide = (wrapEl: Parameters<typeof $>[0]) => {
      const $wrap = $(wrapEl);
      const teamClass = $wrap.find("a.teamName").first().attr("class") ?? "";
      const teamIdMatch = teamClass.match(/teamId-(\d+)/);
      const userClass = $wrap.find(".userName").first().attr("class") ?? "";
      const userIdMatch = userClass.match(/userId-(\d+)/);
      return { teamId: teamIdMatch?.[1], ownerId: userIdMatch ? resolveOwnerId(userIdMatch[1]) : undefined };
    };

    const home = parseSide(teamWraps.get(0)!);
    const away = parseSide(teamWraps.get(1)!);

    if (home.teamId && home.ownerId && away.teamId && away.ownerId) {
      pairings.push({
        homeTeamId: home.teamId,
        homeOwnerId: home.ownerId,
        awayTeamId: away.teamId,
        awayOwnerId: away.ownerId,
      });
    }
  });

  return pairings;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseRosterTable($: cheerio.CheerioAPI, table: any): RosterPlayer[] {
  const players: RosterPlayer[] = [];

  table.find("tr").each((i: number, row: Parameters<typeof $>[0]) => {
    if (i < 2) return; // first two rows are group/column headers

    const $row = $(row);
    const slot = $row.find("td.teamPosition span.final").first().text().trim();
    const name = $row.find("td.playerNameAndInfo a.playerName").first().text().trim();
    if (!slot || !name) return; // empty roster slot

    const posTeamText = $row.find("td.playerNameAndInfo em").first().text().trim(); // e.g. "QB - LAR"
    const [position, nflTeam] = posTeamText.split(" - ").map((s) => s.trim());
    const pointsText = $row.find("td.stat.statTotal .playerTotal").first().text().trim();
    const points = parseFloat(pointsText);

    players.push({
      slot,
      name,
      position: position ?? "",
      nflTeam: nflTeam ?? "",
      points: Number.isNaN(points) ? 0 : points,
      starter: slot !== "BN",
    });
  });

  return players;
}

async function scrapeMatchupRosters(
  league: string,
  season: number,
  week: number,
  teamId: string
): Promise<{ home: RosterPlayer[]; away: RosterPlayer[] }> {
  const url = `https://fantasy.nfl.com/league/${league}/history/${season}/teamgamecenter?teamId=${teamId}&week=${week}`;
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);
  const tables = $("table");

  return {
    home: [...parseRosterTable($, tables.eq(0)), ...parseRosterTable($, tables.eq(1))],
    away: [...parseRosterTable($, tables.eq(2)), ...parseRosterTable($, tables.eq(3))],
  };
}

async function scrapeFinalRosters(
  league: string,
  season: number,
  finalWeek: number,
  ownerTeamNames: Map<string, string>
): Promise<Record<string, FinalRoster>> {
  console.log(`→ Fetching final-week (week ${finalWeek}) rosters...`);
  const pairings = await scrapeFinalWeekPairings(league, season, finalWeek);
  await sleep(150);

  const rosters: Record<string, FinalRoster> = {};

  for (const pairing of pairings) {
    const { home, away } = await scrapeMatchupRosters(league, season, finalWeek, pairing.homeTeamId);

    rosters[pairing.homeOwnerId] = {
      week: finalWeek,
      teamId: pairing.homeTeamId,
      teamName: ownerTeamNames.get(pairing.homeOwnerId) ?? "",
      players: home,
    };
    rosters[pairing.awayOwnerId] = {
      week: finalWeek,
      teamId: pairing.awayTeamId,
      teamName: ownerTeamNames.get(pairing.awayOwnerId) ?? "",
      players: away,
    };

    console.log(`  ✓ Rosters for teamId ${pairing.homeTeamId} vs ${pairing.awayTeamId} (${home.length}/${away.length} players)`);
    await sleep(150);
  }

  return rosters;
}

async function scrapeSeason(
  league: string,
  season: number,
  regularSeasonWeeksOverride: number | undefined,
  skipRosters: boolean,
  ownersById: Map<string, ScrapedOwner>
): Promise<void> {
  console.log(`\n📥 Scraping league ${league}, season ${season}...`);

  console.log("→ Fetching managers/owners...");
  const owners = await scrapeOwners(league, season);
  for (const o of owners.values()) {
    // teamId is season-scoped; owners.json holds cross-season identity, so leave it out.
    const { teamId: _teamId, ...identity } = o;
    ownersById.set(o.id, identity);
  }
  console.log(`  ✓ Found ${owners.size} owners`);
  await sleep(150);

  console.log("→ Fetching standings (regular-season length + final placements)...");
  const standings = await scrapeStandings(league, season);
  await sleep(150);

  let regularSeasonWeeks = regularSeasonWeeksOverride;
  if (regularSeasonWeeks === undefined) {
    if (standings.regularSeasonWeeks === null) {
      throw new Error(
        `Could not auto-detect regular-season length for ${season}. Pass --regularSeasonWeeks to override.`
      );
    }
    regularSeasonWeeks = standings.regularSeasonWeeks;
    console.log(`  ✓ Regular season is ${regularSeasonWeeks} weeks`);
  }
  console.log(`  ✓ Final placements for ${standings.placementsByTeamId.size} teams`);

  const weeks: ScrapedWeek[] = [];
  let week = 1;
  const MAX_WEEKS = 18;
  while (week <= MAX_WEEKS) {
    const scraped = await scrapeWeek(league, season, week, regularSeasonWeeks);
    if (!scraped) {
      console.log(`→ Week ${week}: no matchups found, stopping`);
      break;
    }
    console.log(`→ Week ${week}: ✓ ${scraped.matchups.length} matchups`);
    weeks.push(scraped);
    week += 1;
    await sleep(150);
  }

  if (weeks.length === 0) {
    throw new Error(`No weeks scraped for season ${season} — skipping file write.`);
  }

  const outDir = path.join(process.cwd(), "src", "data");
  fs.mkdirSync(outDir, { recursive: true });

  const seasonPath = path.join(outDir, `${season}-season.json`);
  fs.writeFileSync(seasonPath, JSON.stringify({ season, weeks }, null, 2));
  console.log(`✅ Wrote ${seasonPath} (${weeks.length} weeks)`);

  if (!skipRosters) {
    const finalWeek = weeks[weeks.length - 1].week;
    const ownerTeamNames = new Map(Array.from(owners.values()).map((o) => [o.id, o.teamName] as const));
    const rosters = await scrapeFinalRosters(league, season, finalWeek, ownerTeamNames);

    for (const roster of Object.values(rosters)) {
      const place = standings.placementsByTeamId.get(roster.teamId);
      if (place !== undefined) roster.place = place;
    }

    // Bottom-seeded teams sometimes have no matchup in the final week (bye in
    // the consolation bracket), so they never show up in `rosters` above.
    // Their placement is still known from standings — attach a roster-less
    // placeholder so that data isn't lost.
    for (const o of owners.values()) {
      if (rosters[o.id]) continue;
      const place = standings.placementsByTeamId.get(o.teamId);
      if (place === undefined) continue;
      rosters[o.id] = { week: finalWeek, teamId: o.teamId, teamName: o.teamName, place, players: [] };
    }

    const rostersDir = path.join(outDir, "rosters");
    fs.mkdirSync(rostersDir, { recursive: true });
    const rostersPath = path.join(rostersDir, `${season}.json`);
    fs.writeFileSync(rostersPath, JSON.stringify({ season, rosters }, null, 2));
    console.log(`✅ Wrote ${rostersPath} (${Object.keys(rosters).length} teams)`);
  }
}

async function main() {
  const { league, seasons, regularSeasonWeeksOverride, skipRosters } = parseArgs();

  const outDir = path.join(process.cwd(), "src", "data");
  const ownersPath = path.join(outDir, "owners.json");
  fs.mkdirSync(outDir, { recursive: true });
  const existingOwners: ScrapedOwner[] = fs.existsSync(ownersPath)
    ? JSON.parse(fs.readFileSync(ownersPath, "utf8"))
    : [];
  // Drop any owner id that's now a known alias — it was written before
  // OWNER_ID_ALIASES consolidated it, and would otherwise linger forever
  // since a fresh scrape never produces that id again.
  const ownersById = new Map(
    existingOwners.filter((o) => !(o.id in OWNER_ID_ALIASES)).map((o) => [o.id, o])
  );

  const failures: { season: number; error: unknown }[] = [];

  for (const season of seasons) {
    try {
      await scrapeSeason(league, season, regularSeasonWeeksOverride, skipRosters, ownersById);
    } catch (err) {
      console.error(`❌ Failed to scrape season ${season}:`, err);
      failures.push({ season, error: err });
    }
  }

  const mergedOwners = Array.from(ownersById.values());
  fs.writeFileSync(ownersPath, JSON.stringify(mergedOwners, null, 2));
  console.log(`\n✅ Wrote ${ownersPath} (${mergedOwners.length} total owners)`);

  if (failures.length > 0) {
    console.error(`\n⚠️ ${failures.length}/${seasons.length} season(s) failed: ${failures.map((f) => f.season).join(", ")}`);
    process.exit(1);
  }

  console.log("\n🎉 Done!");
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
