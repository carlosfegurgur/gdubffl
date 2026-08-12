import { loadSeason } from "./data-loader.server";

type PowerRank = {
  ownerId: string;
  teamName?: string;
  score: number;
  avgPointsFor: number;
  avgPointsAgainst: number;
  benchEfficiency?: number;
  winPct: number;
  week?: number; // if week-to-week
};

function avg(arr: number[]) { return arr.reduce((a,b)=>a+b,0)/Math.max(arr.length,1); }

/**
 * Compute a simple power ranking for a season up to `throughWeek`.
 * Formula (tweakable):
 * score = avgPointsFor * 0.45  + (1 / (1+avgPointsAgainst)) * 100 * 0.25 + benchEfficiency*0.15 + winPct*100*0.15
 */
export async function computePowerRankings(season: number, throughWeek?: number): Promise<PowerRank[]> {
  const seasonFile = await loadSeason(season);
  const weeks = seasonFile.weeks.filter(w => throughWeek ? w.week <= throughWeek : true);
  const matchups = weeks.flatMap(w => w.matchups.map(m => ({...m, week: w.week})));

  // collect per-team arrays
  const teams = new Map<string, { pointsFor: number[]; pointsAgainst: number[]; wins: number; losses: number }>();
  matchups.forEach(m => {
    const h = m.homeOwnerId, a = m.awayOwnerId;
    if (!teams.has(h)) teams.set(h, { pointsFor: [], pointsAgainst: [], wins: 0, losses: 0 });
    if (!teams.has(a)) teams.set(a, { pointsFor: [], pointsAgainst: [], wins: 0, losses: 0 });

    teams.get(h)!.pointsFor.push(m.homeScore);
    teams.get(h)!.pointsAgainst.push(m.awayScore);
    teams.get(a)!.pointsFor.push(m.awayScore);
    teams.get(a)!.pointsAgainst.push(m.homeScore);

    if (m.homeScore > m.awayScore) teams.get(h)!.wins += 1, teams.get(a)!.losses += 1;
    else if (m.awayScore > m.homeScore) teams.get(a)!.wins += 1, teams.get(h)!.losses += 1;
  });

  const results: PowerRank[] = [];
  for (const [ownerId, data] of teams.entries()) {
    const avgPF = avg(data.pointsFor);
    const avgPA = avg(data.pointsAgainst);
    const totalGames = data.wins + data.losses || 1;
    const winPct = data.wins / totalGames;
    // Score components (scale PA by inverted metric — lower is better)
    const score = avgPF * 0.45 + (1 / (1 + avgPA)) * 100 * 0.25 + winPct * 100 * 0.15;

    results.push({
      ownerId,
      score: Math.round(score * 100) / 100,
      avgPointsFor: Math.round(avgPF * 100) / 100,
      avgPointsAgainst: Math.round(avgPA * 100) / 100,
      winPct: Math.round(winPct * 10000) / 10000
    });
  }

  // sort desc
  results.sort((a,b) => b.score - a.score);
  // attach rank by index is left to frontend or API consumer
  return results;
}
