import { loadFinalRosters, loadOwners, loadSeason } from "./data-loader.server";

export type PowerRanking = {
  ownerId: string;
  ownerName: string;
  teamName: string;
  logoUrl?: string;
  gamesPlayed: number;
  avgScore: number;
  highScore: number;
  lowScore: number;
  winPct: number;
  /** Oberon Mt. Power Rating: (avgScore*6 + (highScore+lowScore)*2 + (winPct*200)*2) / 10 */
  rawOPR: number;
  /** rawOPR divided by that season's league-average rawOPR. 1.000 = exactly average. */
  adjustedOPR: number;
};

/**
 * Power rankings using the Oberon Mt. Fantasy Football League's "OPR"
 * formula (as popularized by the OIL fantasy league, oil.football/opr):
 *
 *   rawOPR = (avgScore * 6 + (highScore + lowScore) * 2 + (winPct * 200) * 2) / 10
 *
 * avgScore rewards a team's baseline scoring, (highScore + lowScore) — the
 * "Deviation" — gives extra credit for a big ceiling while still punishing a
 * bad week, and winPct rewards/punishes managerial intangibles (start/sit,
 * lineup luck) beyond what raw scoring already captures.
 *
 * adjustedOPR then divides each team's rawOPR by the season's average rawOPR
 * so teams can be compared across seasons/eras with different scoring
 * environments — 1.000 is exactly average for that season, and every ~0.045
 * above or below 1.000 roughly tracks a win or loss over a season.
 */
export async function computePowerRankings(season: number, throughWeek?: number): Promise<PowerRanking[]> {
  const [seasonFile, owners, rosters] = await Promise.all([loadSeason(season), loadOwners(), loadFinalRosters(season)]);
  const ownerById = new Map(owners.map((o) => [o.id, o]));
  // Team names change season to season; prefer that season's roster teamName
  // (captured when we scraped that season's final-week rosters) over the
  // owner's current cross-season identity, same as computeSeasonStandings.
  const teamNameByOwnerId = new Map(Object.entries(rosters.rosters).map(([id, r]) => [id, r.teamName]));

  const weeks = seasonFile.weeks.filter((w) => (throughWeek ? w.week <= throughWeek : true));

  type Acc = { scores: number[]; wins: number; losses: number; ties: number; teamName?: string };
  const teams = new Map<string, Acc>();

  const record = (ownerId: string, score: number, opponentScore: number) => {
    if (!teams.has(ownerId)) teams.set(ownerId, { scores: [], wins: 0, losses: 0, ties: 0 });
    const acc = teams.get(ownerId)!;
    acc.scores.push(score);
    if (score > opponentScore) acc.wins += 1;
    else if (score < opponentScore) acc.losses += 1;
    else acc.ties += 1;
  };

  for (const w of weeks) {
    for (const m of w.matchups) {
      record(m.homeOwnerId, m.homeScore, m.awayScore);
      record(m.awayOwnerId, m.awayScore, m.homeScore);
    }
  }

  const rawByOwner = new Map<string, { avgScore: number; highScore: number; lowScore: number; winPct: number; gamesPlayed: number; rawOPR: number }>();

  for (const [ownerId, acc] of teams) {
    const gamesPlayed = acc.scores.length;
    if (gamesPlayed === 0) continue;
    const avgScore = acc.scores.reduce((a, b) => a + b, 0) / gamesPlayed;
    const highScore = Math.max(...acc.scores);
    const lowScore = Math.min(...acc.scores);
    const decidedGames = acc.wins + acc.losses + acc.ties;
    const winPct = decidedGames > 0 ? acc.wins / decidedGames : 0;

    const rawOPR = (avgScore * 6 + (highScore + lowScore) * 2 + winPct * 200 * 2) / 10;

    rawByOwner.set(ownerId, { avgScore, highScore, lowScore, winPct, gamesPlayed, rawOPR });
  }

  const rawValues = Array.from(rawByOwner.values()).map((r) => r.rawOPR);
  const leagueAvgRawOPR = rawValues.length ? rawValues.reduce((a, b) => a + b, 0) / rawValues.length : 0;

  const results: PowerRanking[] = Array.from(rawByOwner.entries()).map(([ownerId, r]) => {
    const owner = ownerById.get(ownerId);
    return {
      ownerId,
      ownerName: owner?.name ?? ownerId,
      teamName: teamNameByOwnerId.get(ownerId) ?? owner?.teamName ?? ownerId,
      logoUrl: owner?.logoUrl,
      gamesPlayed: r.gamesPlayed,
      avgScore: Math.round(r.avgScore * 100) / 100,
      highScore: Math.round(r.highScore * 100) / 100,
      lowScore: Math.round(r.lowScore * 100) / 100,
      winPct: Math.round(r.winPct * 1000) / 1000,
      rawOPR: Math.round(r.rawOPR * 100) / 100,
      adjustedOPR: leagueAvgRawOPR > 0 ? Math.round((r.rawOPR / leagueAvgRawOPR) * 1000) / 1000 : 0,
    };
  });

  results.sort((a, b) => b.adjustedOPR - a.adjustedOPR);
  return results;
}
