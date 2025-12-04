/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadAllMatchups } from "./data-loader.server";
import type { Matchup } from "./data-loader.server";

export type HeadToHeadSummary = {
  teamA: string;
  teamB: string;
  totalMatches: number;
  winsA: number;
  winsB: number;
  ties: number;
  avgMargin: number;
  biggestWin: { owner: string; margin: number; matchup: Matchup | null } | null;
  closestWin: { owner: string; margin: number; matchup: Matchup | null } | null;
  matchups: Matchup[];
};

export function computeHeadToHead(season: number, ownerA: string, ownerB: string): HeadToHeadSummary {
  const all = loadAllMatchups(season);
  const filtered = all.filter(m => 
    (m.homeOwnerId === ownerA && m.awayOwnerId === ownerB) || (m.homeOwnerId === ownerB && m.awayOwnerId === ownerA)
  );

  let winsA = 0, winsB = 0, ties = 0;
  let totalMargin = 0;
  let biggestWin: { margin: any; owner?: string; matchup?: Matchup; } | null = null;
  let closestWin: { margin: any; owner?: string; matchup?: Matchup; } | null = null;

  filtered.forEach(m => {
    const scoreA = m.homeOwnerId === ownerA ? m.homeScore : m.awayScore;
    const scoreB = m.homeOwnerId === ownerA ? m.awayScore : m.homeScore;
    const margin = Math.abs(scoreA - scoreB);
    totalMargin += (m.homeOwnerId === ownerA ? (m.homeScore - m.awayScore) : (m.awayScore - m.homeScore));
    if (scoreA > scoreB) winsA++;
    else if (scoreB > scoreA) winsB++;
    else ties++;

    if (!biggestWin || margin > biggestWin.margin) biggestWin = { owner: scoreA > scoreB ? ownerA : ownerB, margin, matchup: m };
    if (!closestWin || (margin < closestWin.margin && margin > 0)) closestWin = { owner: scoreA > scoreB ? ownerA : ownerB, margin, matchup: m };
  });

  const avgMargin = filtered.length ? totalMargin / filtered.length : 0;

  return {
    teamA: ownerA,
    teamB: ownerB,
    totalMatches: filtered.length,
    winsA, winsB, ties,
    avgMargin: Math.round(avgMargin * 100) / 100,
    biggestWin,
    closestWin,
    matchups: filtered.sort((a,b) => (a.week||0) - (b.week||0))
  };
}
