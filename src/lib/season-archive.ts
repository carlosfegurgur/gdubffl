import { listAvailableSeasons, loadAllMatchups, loadFinalRosters, loadOwners } from "./data-loader.server";
import { ordinal } from "./format";

export type SeasonSummary = {
  season: number;
  teamCount: number;
  championOwnerId?: string;
  championOwnerName?: string;
  championTeamName?: string;
};

/** One row per scraped season, newest first, with just enough to build an index page. */
export async function computeSeasonSummaries(): Promise<SeasonSummary[]> {
  const [seasons, owners] = await Promise.all([listAvailableSeasons(), loadOwners()]);
  const ownerNameById = new Map(owners.map((o) => [o.id, o.name]));

  return Promise.all(
    seasons.map(async (season) => {
      const rosters = await loadFinalRosters(season);
      const entries = Object.entries(rosters.rosters);
      const champion = entries.find(([, r]) => r.place === 1);
      return {
        season,
        teamCount: entries.length,
        championOwnerId: champion?.[0],
        championOwnerName: champion ? ownerNameById.get(champion[0]) : undefined,
        championTeamName: champion?.[1].teamName,
      };
    })
  );
}

export type StandingRow = {
  ownerId: string;
  ownerName: string;
  teamName: string;
  place?: number;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
};

/** One row per team that played this season, sorted by final place. */
export async function computeSeasonStandings(season: number): Promise<StandingRow[]> {
  const [matchups, rosters, owners] = await Promise.all([
    loadAllMatchups(season),
    loadFinalRosters(season),
    loadOwners(),
  ]);

  const ownerNameById = new Map(owners.map((o) => [o.id, o.name]));

  type Acc = { wins: number; losses: number; ties: number; pointsFor: number; pointsAgainst: number };
  const acc = new Map<string, Acc>();

  const record = (ownerId: string, pointsFor: number, pointsAgainst: number) => {
    if (!acc.has(ownerId)) acc.set(ownerId, { wins: 0, losses: 0, ties: 0, pointsFor: 0, pointsAgainst: 0 });
    const a = acc.get(ownerId)!;
    a.pointsFor += pointsFor;
    a.pointsAgainst += pointsAgainst;
    if (pointsFor > pointsAgainst) a.wins += 1;
    else if (pointsFor < pointsAgainst) a.losses += 1;
    else a.ties += 1;
  };

  for (const m of matchups) {
    record(m.homeOwnerId, m.homeScore, m.awayScore);
    record(m.awayOwnerId, m.awayScore, m.homeScore);
  }

  const rows: StandingRow[] = Array.from(acc.entries()).map(([ownerId, a]) => {
    const roster = rosters.rosters[ownerId];
    const ownerName = ownerNameById.get(ownerId) ?? ownerId;
    return {
      ownerId,
      ownerName,
      teamName: roster?.teamName ?? ownerName,
      place: roster?.place,
      wins: a.wins,
      losses: a.losses,
      ties: a.ties,
      pointsFor: Math.round(a.pointsFor * 100) / 100,
      pointsAgainst: Math.round(a.pointsAgainst * 100) / 100,
    };
  });

  rows.sort((a, b) => (a.place ?? 999) - (b.place ?? 999));
  return rows;
}

export type BracketMatchup = {
  id: string;
  label?: string; // e.g. "Championship", "3rd Place Game" — only set for the final playoff week
  homeOwnerId: string;
  homeOwnerName: string;
  homeTeamName: string;
  homeScore: number;
  homePlace?: number;
  awayOwnerId: string;
  awayOwnerName: string;
  awayTeamName: string;
  awayScore: number;
  awayPlace?: number;
};

export type PlayoffRound = {
  week: number;
  roundName: string;
  matchups: BracketMatchup[];
};

/**
 * Playoff bracket for a season, grouped into rounds. Round names and which
 * week is "final" are derived from that season's actual playoff week count
 * (Matchup.isPlayoff) rather than a hardcoded per-season format — this
 * league's playoff length has varied (2 rounds some years, 3 in others), so
 * a fixed assumption would silently mislabel older seasons.
 *
 * The final week's individual matchups get precise labels (Championship,
 * 3rd Place Game, ...) by cross-referencing each side's final standing —
 * consecutive-place pairs play placement games (1v2 = Championship, 3v4 =
 * 3rd Place Game, etc). Earlier rounds are labeled generically
 * (Quarterfinals/Semifinals) since we can't distinguish winners-bracket
 * from consolation-bracket games within the same week from matchup data
 * alone.
 */
export async function computePlayoffBracket(season: number): Promise<PlayoffRound[]> {
  const [matchups, rosters, owners] = await Promise.all([
    loadAllMatchups(season),
    loadFinalRosters(season),
    loadOwners(),
  ]);

  const ownerNameById = new Map(owners.map((o) => [o.id, o.name]));
  const placeByOwnerId = new Map(Object.entries(rosters.rosters).map(([id, r]) => [id, r.place]));
  const teamNameByOwnerId = new Map(Object.entries(rosters.rosters).map(([id, r]) => [id, r.teamName]));

  const playoffMatchups = matchups.filter((m) => m.isPlayoff && m.week !== undefined);
  const weeks = Array.from(new Set(playoffMatchups.map((m) => m.week as number))).sort((a, b) => a - b);
  if (weeks.length === 0) return [];

  const n = weeks.length;
  const roundName = (indexFromStart: number): string => {
    const distanceFromEnd = n - 1 - indexFromStart;
    if (distanceFromEnd === 0) return "Championship Week";
    if (distanceFromEnd === 1) return "Semifinals";
    if (distanceFromEnd === 2) return "Quarterfinals";
    return `Round ${indexFromStart + 1}`;
  };

  return weeks.map((week, i) => {
    const isFinalWeek = i === n - 1;
    const weekMatchups = playoffMatchups.filter((m) => m.week === week);

    const bracketMatchups: BracketMatchup[] = weekMatchups.map((m) => {
      const homePlace = placeByOwnerId.get(m.homeOwnerId);
      const awayPlace = placeByOwnerId.get(m.awayOwnerId);
      let label: string | undefined;
      if (isFinalWeek && homePlace !== undefined && awayPlace !== undefined) {
        const best = Math.min(homePlace, awayPlace);
        label = best === 1 ? "Championship" : `${ordinal(best)} Place Game`;
      }
      return {
        id: m.id,
        label,
        homeOwnerId: m.homeOwnerId,
        homeOwnerName: ownerNameById.get(m.homeOwnerId) ?? m.homeOwnerId,
        homeTeamName: teamNameByOwnerId.get(m.homeOwnerId) ?? m.homeOwnerName ?? m.homeOwnerId,
        homeScore: m.homeScore,
        homePlace,
        awayOwnerId: m.awayOwnerId,
        awayOwnerName: ownerNameById.get(m.awayOwnerId) ?? m.awayOwnerId,
        awayTeamName: teamNameByOwnerId.get(m.awayOwnerId) ?? m.awayOwnerName ?? m.awayOwnerId,
        awayScore: m.awayScore,
        awayPlace,
      };
    });

    if (isFinalWeek) {
      bracketMatchups.sort(
        (a, b) => Math.min(a.homePlace ?? 999, a.awayPlace ?? 999) - Math.min(b.homePlace ?? 999, b.awayPlace ?? 999)
      );
    }

    return { week, roundName: roundName(i), matchups: bracketMatchups };
  });
}

export type ChampionSpotlight = {
  season: number;
  champion: StandingRow & { logoUrl?: string };
  runnerUp?: StandingRow & { logoUrl?: string };
  championshipGame?: BracketMatchup;
};

/** Most recent season's champion, runner-up, and the championship game itself. */
export async function computeChampionSpotlight(): Promise<ChampionSpotlight | null> {
  const seasons = await listAvailableSeasons();
  const season = seasons[0];
  if (season === undefined) return null;

  const [standings, bracket, owners] = await Promise.all([
    computeSeasonStandings(season),
    computePlayoffBracket(season),
    loadOwners(),
  ]);

  const champion = standings.find((s) => s.place === 1);
  if (!champion) return null;

  const logoById = new Map(owners.map((o) => [o.id, o.logoUrl]));
  const runnerUp = standings.find((s) => s.place === 2);
  const championshipGame = bracket[bracket.length - 1]?.matchups.find((m) => m.label === "Championship");

  return {
    season,
    champion: { ...champion, logoUrl: logoById.get(champion.ownerId) },
    runnerUp: runnerUp ? { ...runnerUp, logoUrl: logoById.get(runnerUp.ownerId) } : undefined,
    championshipGame,
  };
}
