import { loadAllMatchups, listAvailableSeasons } from "./data-loader.server";
import type { Matchup } from "./data-loader.server";

export type SeasonMatchup = Matchup & { season: number };

export type HeadToHeadSummary = {
  teamA: string;
  teamB: string;
  totalMatches: number;
  winsA: number;
  winsB: number;
  ties: number;
  avgMargin: number;
  biggestWin: { owner: string; margin: number; matchup: SeasonMatchup } | null;
  closestWin: { owner: string; margin: number; matchup: SeasonMatchup } | null;
  matchups: SeasonMatchup[];
};

/**
 * Head-to-head record between two owners. Pass `season` to scope to one
 * year; omit it to aggregate across every scraped season (all-time rivalry).
 */
export function computeHeadToHead(season: number | undefined, ownerA: string, ownerB: string): HeadToHeadSummary {
  const seasons = season !== undefined ? [season] : listAvailableSeasons();

  const filtered: SeasonMatchup[] = seasons.flatMap((s) =>
    loadAllMatchups(s)
      .filter(
        (m) =>
          (m.homeOwnerId === ownerA && m.awayOwnerId === ownerB) ||
          (m.homeOwnerId === ownerB && m.awayOwnerId === ownerA)
      )
      .map((m) => ({ ...m, season: s }))
  );

  let winsA = 0, winsB = 0, ties = 0;
  let totalMargin = 0;
  let biggestWin: { owner: string; margin: number; matchup: SeasonMatchup } | null = null;
  let closestWin: { owner: string; margin: number; matchup: SeasonMatchup } | null = null;

  filtered.forEach((m) => {
    const scoreA = m.homeOwnerId === ownerA ? m.homeScore : m.awayScore;
    const scoreB = m.homeOwnerId === ownerA ? m.awayScore : m.homeScore;
    const margin = Math.round(Math.abs(scoreA - scoreB) * 100) / 100;
    totalMargin += m.homeOwnerId === ownerA ? m.homeScore - m.awayScore : m.awayScore - m.homeScore;
    if (scoreA > scoreB) winsA++;
    else if (scoreB > scoreA) winsB++;
    else ties++;

    if (!biggestWin || margin > biggestWin.margin) {
      biggestWin = { owner: scoreA > scoreB ? ownerA : ownerB, margin, matchup: m };
    }
    if (margin > 0 && (!closestWin || margin < closestWin.margin)) {
      closestWin = { owner: scoreA > scoreB ? ownerA : ownerB, margin, matchup: m };
    }
  });

  const avgMargin = filtered.length ? totalMargin / filtered.length : 0;

  return {
    teamA: ownerA,
    teamB: ownerB,
    totalMatches: filtered.length,
    winsA,
    winsB,
    ties,
    avgMargin: Math.round(avgMargin * 100) / 100,
    biggestWin,
    closestWin,
    matchups: filtered.sort((a, b) => a.season - b.season || (a.week || 0) - (b.week || 0)),
  };
}
