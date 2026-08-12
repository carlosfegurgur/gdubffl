import { loadAllMatchups, loadFinalRosters, loadOwners, listAvailableSeasons } from "./data-loader.server";

export type CareerStats = {
  ownerId: string;
  ownerName: string;
  teamName: string;
  logoUrl?: string;
  seasonsPlayed: number[];
  wins: number;
  losses: number;
  ties: number;
  winPct: number;
  pointsFor: number;
  pointsAgainst: number;
  avgPointsFor: number;
  avgPointsAgainst: number;
  gamesPlayed: number;
};

type Accumulator = {
  seasonsPlayed: Set<number>;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
  gamesPlayed: number;
};

function emptyAccumulator(): Accumulator {
  return { seasonsPlayed: new Set(), wins: 0, losses: 0, ties: 0, pointsFor: 0, pointsAgainst: 0, gamesPlayed: 0 };
}

/** Aggregate every owner's record and scoring across all scraped seasons. */
export function computeCareerStats(): CareerStats[] {
  const owners = loadOwners();
  const seasons = listAvailableSeasons();

  const acc = new Map<string, Accumulator>();
  for (const o of owners) acc.set(o.id, emptyAccumulator());

  for (const season of seasons) {
    const matchups = loadAllMatchups(season);
    for (const m of matchups) {
      const home = acc.get(m.homeOwnerId);
      const away = acc.get(m.awayOwnerId);
      if (home) {
        home.seasonsPlayed.add(season);
        home.pointsFor += m.homeScore;
        home.pointsAgainst += m.awayScore;
        home.gamesPlayed += 1;
        if (m.homeScore > m.awayScore) home.wins += 1;
        else if (m.homeScore < m.awayScore) home.losses += 1;
        else home.ties += 1;
      }
      if (away) {
        away.seasonsPlayed.add(season);
        away.pointsFor += m.awayScore;
        away.pointsAgainst += m.homeScore;
        away.gamesPlayed += 1;
        if (m.awayScore > m.homeScore) away.wins += 1;
        else if (m.awayScore < m.homeScore) away.losses += 1;
        else away.ties += 1;
      }
    }
  }

  return owners
    .map((o) => {
      const a = acc.get(o.id)!;
      const totalGames = a.wins + a.losses + a.ties || 1;
      return {
        ownerId: o.id,
        ownerName: o.name,
        teamName: o.teamName,
        logoUrl: o.logoUrl,
        seasonsPlayed: Array.from(a.seasonsPlayed).sort((x, y) => y - x),
        wins: a.wins,
        losses: a.losses,
        ties: a.ties,
        winPct: Math.round((a.wins / totalGames) * 1000) / 1000,
        pointsFor: Math.round(a.pointsFor * 100) / 100,
        pointsAgainst: Math.round(a.pointsAgainst * 100) / 100,
        avgPointsFor: Math.round((a.pointsFor / (a.gamesPlayed || 1)) * 100) / 100,
        avgPointsAgainst: Math.round((a.pointsAgainst / (a.gamesPlayed || 1)) * 100) / 100,
        gamesPlayed: a.gamesPlayed,
      };
    })
    .filter((s) => s.gamesPlayed > 0)
    .sort((x, y) => y.winPct - x.winPct);
}

export type SeasonStats = {
  season: number;
  teamName: string;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
};

/** Season-by-season breakdown for one owner, newest season first. */
export function computeSeasonStats(ownerId: string): SeasonStats[] {
  const seasons = listAvailableSeasons();
  const results: SeasonStats[] = [];
  const currentTeamName = loadOwners().find((o) => o.id === ownerId)?.teamName ?? ownerId;

  for (const season of seasons) {
    const matchups = loadAllMatchups(season).filter(
      (m) => m.homeOwnerId === ownerId || m.awayOwnerId === ownerId
    );
    if (matchups.length === 0) continue;

    let wins = 0, losses = 0, ties = 0, pointsFor = 0, pointsAgainst = 0;
    for (const m of matchups) {
      const isHome = m.homeOwnerId === ownerId;
      const scoreFor = isHome ? m.homeScore : m.awayScore;
      const scoreAgainst = isHome ? m.awayScore : m.homeScore;
      pointsFor += scoreFor;
      pointsAgainst += scoreAgainst;
      if (scoreFor > scoreAgainst) wins += 1;
      else if (scoreFor < scoreAgainst) losses += 1;
      else ties += 1;
    }

    // Team names change season to season; prefer that season's roster teamName
    // (captured when we scraped final-week rosters) over the current one.
    let teamName = currentTeamName;
    try {
      const rosters = loadFinalRosters(season);
      teamName = rosters.rosters[ownerId]?.teamName ?? teamName;
    } catch {
      // no roster file for this season; fall back to current team name
    }

    results.push({
      season,
      teamName,
      wins,
      losses,
      ties,
      pointsFor: Math.round(pointsFor * 100) / 100,
      pointsAgainst: Math.round(pointsAgainst * 100) / 100,
    });
  }

  return results;
}
