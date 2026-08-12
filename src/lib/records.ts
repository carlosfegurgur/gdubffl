import prisma from "./prisma";

export type GamePerformance = {
  ownerId: string;
  ownerName: string;
  opponentId: string;
  opponentName: string;
  season: number;
  week: number;
  points: number;
  opponentPoints: number;
  margin: number; // points - opponentPoints (signed: positive = win)
  result: "W" | "L" | "T";
  isPlayoff: boolean;
};

export type RecordEntry = {
  ownerId: string;
  ownerName: string;
  opponentId: string;
  opponentName: string;
  season: number;
  week: number;
  points: number;
  opponentPoints: number;
  margin: number; // always positive for blowout/closest; signed for highestScore
  isPlayoff: boolean;
};

export type StreakRecord = {
  ownerId: string;
  ownerName: string;
  length: number;
  startSeason: number;
  startWeek: number;
  endSeason: number;
  endWeek: number;
};

export type AllTimeRecords = {
  highestScore: RecordEntry | null;
  biggestBlowout: RecordEntry | null;
  closestGame: RecordEntry | null;
  longestWinStreak: StreakRecord | null;
  longestLossStreak: StreakRecord | null;
};

async function fetchMatchups(season?: number) {
  return prisma.matchup.findMany({
    where: season !== undefined ? { season } : {},
    include: { homeOwner: true, awayOwner: true },
    orderBy: [{ season: "asc" }, { week: "asc" }],
  });
}

type FetchedMatchup = Awaited<ReturnType<typeof fetchMatchups>>[number];

/** Every game, flattened to one row per team, for the sortable leaderboard. */
export async function computeGameLeaderboard(season?: number): Promise<GamePerformance[]> {
  const matchups = await fetchMatchups(season);
  const rows: GamePerformance[] = [];

  for (const m of matchups) {
    rows.push(toGamePerformance(m, true));
    rows.push(toGamePerformance(m, false));
  }

  return rows;
}

function toGamePerformance(m: FetchedMatchup, isHomeSide: boolean): GamePerformance {
  const points = isHomeSide ? m.homeScore : m.awayScore;
  const opponentPoints = isHomeSide ? m.awayScore : m.homeScore;
  return {
    ownerId: isHomeSide ? m.homeOwnerId : m.awayOwnerId,
    ownerName: isHomeSide ? m.homeOwner.name : m.awayOwner.name,
    opponentId: isHomeSide ? m.awayOwnerId : m.homeOwnerId,
    opponentName: isHomeSide ? m.awayOwner.name : m.homeOwner.name,
    season: m.season,
    week: m.week,
    points,
    opponentPoints,
    margin: Math.round((points - opponentPoints) * 100) / 100,
    result: points > opponentPoints ? "W" : points < opponentPoints ? "L" : "T",
    isPlayoff: m.isPlayoff,
  };
}

/** Headline all-time (or single-season, if `season` is passed) records. */
export async function computeAllTimeRecords(season?: number): Promise<AllTimeRecords> {
  const matchups = await fetchMatchups(season);

  let highestScore: RecordEntry | null = null;
  let biggestBlowout: RecordEntry | null = null;
  let closestGame: RecordEntry | null = null;

  for (const m of matchups) {
    const home = toGamePerformance(m, true);
    const away = toGamePerformance(m, false);

    for (const side of [home, away]) {
      if (!highestScore || side.points > highestScore.points) {
        highestScore = { ...side, margin: side.margin };
      }
    }

    const margin = Math.round(Math.abs(m.homeScore - m.awayScore) * 100) / 100;
    if (margin > 0) {
      const winnerSide = m.homeScore > m.awayScore ? home : away;
      const entry: RecordEntry = { ...winnerSide, margin };
      if (!biggestBlowout || margin > biggestBlowout.margin) biggestBlowout = entry;
      if (!closestGame || margin < closestGame.margin) closestGame = entry;
    }
  }

  const { longestWinStreak, longestLossStreak } = computeStreaks(matchups);

  return { highestScore, biggestBlowout, closestGame, longestWinStreak, longestLossStreak };
}

function computeStreaks(matchups: FetchedMatchup[]): {
  longestWinStreak: StreakRecord | null;
  longestLossStreak: StreakRecord | null;
} {
  type Game = { ownerName: string; season: number; week: number; result: "W" | "L" | "T" };
  const byOwner = new Map<string, Game[]>();

  const pushGame = (ownerId: string, ownerName: string, season: number, week: number, result: "W" | "L" | "T") => {
    if (!byOwner.has(ownerId)) byOwner.set(ownerId, []);
    byOwner.get(ownerId)!.push({ ownerName, season, week, result });
  };

  for (const m of matchups) {
    const homeResult = m.homeScore > m.awayScore ? "W" : m.homeScore < m.awayScore ? "L" : "T";
    const awayResult = m.awayScore > m.homeScore ? "W" : m.awayScore < m.homeScore ? "L" : "T";
    pushGame(m.homeOwnerId, m.homeOwner.name, m.season, m.week, homeResult);
    pushGame(m.awayOwnerId, m.awayOwner.name, m.season, m.week, awayResult);
  }

  let longestWinStreak: StreakRecord | null = null;
  let longestLossStreak: StreakRecord | null = null;

  for (const [ownerId, games] of byOwner) {
    games.sort((a, b) => a.season - b.season || a.week - b.week);

    let i = 0;
    while (i < games.length) {
      if (games[i].result === "T") {
        i++;
        continue;
      }
      const type = games[i].result;
      let j = i;
      while (j < games.length && games[j].result === type) j++;

      const candidate: StreakRecord = {
        ownerId,
        ownerName: games[i].ownerName,
        length: j - i,
        startSeason: games[i].season,
        startWeek: games[i].week,
        endSeason: games[j - 1].season,
        endWeek: games[j - 1].week,
      };

      if (type === "W") {
        if (!longestWinStreak || candidate.length > longestWinStreak.length) longestWinStreak = candidate;
      } else {
        if (!longestLossStreak || candidate.length > longestLossStreak.length) longestLossStreak = candidate;
      }
      i = j;
    }
  }

  return { longestWinStreak, longestLossStreak };
}
