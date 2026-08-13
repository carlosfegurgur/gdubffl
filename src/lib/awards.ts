import { loadOwners } from "./data-loader.server";
import { computeGameLeaderboard } from "./records";
import { computeCareerStats } from "./team-stats";
import { computeSeasonStandings } from "./season-archive";
import { listAvailableSeasons } from "./data-loader.server";

export type AwardLeader = {
  ownerId: string;
  ownerName: string;
  teamName: string;
  logoUrl?: string;
  value: number;
  rank: number;
};

export type Award = {
  id: string;
  title: string;
  blurb: string;
  /** Appended after the formatted value, e.g. "5" + " wins". */
  unit: string;
  /** Used instead of `unit` when the value is exactly 1, e.g. "1 title" not "1 titles". */
  unitSingular: string;
  decimals: number;
  leaders: AwardLeader[];
};

const CLOSE_MARGIN = 5;
const MAX_LEADERS = 5;

type OwnerRow = { id: string; name: string; teamName: string; logoUrl?: string };

/** Rank a value-per-owner map into a leaderboard, ties sharing a rank. */
function rankLeaders(
  valueByOwner: Map<string, number>,
  ownerById: Map<string, OwnerRow>,
  decimals: number,
  direction: "desc" | "asc" = "desc"
): AwardLeader[] {
  const rounded = Array.from(valueByOwner.entries())
    .map(([ownerId, v]) => [ownerId, Math.round(v * 10 ** decimals) / 10 ** decimals] as const)
    .filter(([, v]) => v > 0)
    .sort((a, b) => (direction === "desc" ? b[1] - a[1] : a[1] - b[1]));

  const leaders: AwardLeader[] = [];
  let rank = 0;
  let prevValue: number | null = null;
  for (const [ownerId, value] of rounded) {
    if (value !== prevValue) {
      rank = leaders.length + 1;
      prevValue = value;
    }
    if (leaders.length >= MAX_LEADERS) break;
    const o = ownerById.get(ownerId);
    leaders.push({
      ownerId,
      ownerName: o?.name ?? ownerId,
      teamName: o?.teamName ?? ownerId,
      logoUrl: o?.logoUrl,
      value,
      rank,
    });
  }
  return leaders;
}

function bump(map: Map<string, number>, ownerId: string, by = 1) {
  map.set(ownerId, (map.get(ownerId) ?? 0) + by);
}

/**
 * Career "tally" awards — repeated achievements across a manager's whole
 * history, distinct from the single-game bests already shown on /records.
 */
export async function computeTrophyRoom(): Promise<Award[]> {
  const [owners, games, seasons, career] = await Promise.all([
    loadOwners(),
    computeGameLeaderboard(),
    listAvailableSeasons(),
    computeCareerStats(),
  ]);
  const ownerById = new Map(owners.map((o) => [o.id, o]));

  const closeWins = new Map<string, number>();
  const closeLosses = new Map<string, number>();

  for (const g of games) {
    if (g.result === "W" && g.margin < CLOSE_MARGIN) bump(closeWins, g.ownerId);
    if (g.result === "L" && Math.abs(g.margin) < CLOSE_MARGIN) bump(closeLosses, g.ownerId);
  }

  const standingsBySeason = await Promise.all(seasons.map((s) => computeSeasonStandings(s)));
  const firstPlace = new Map<string, number>();
  const secondPlace = new Map<string, number>();
  const lastPlace = new Map<string, number>();

  for (const rows of standingsBySeason) {
    const withPlace = rows.filter((r) => r.place !== undefined);
    if (withPlace.length === 0) continue;
    const worstPlace = Math.max(...withPlace.map((r) => r.place as number));
    for (const r of withPlace) {
      if (r.place === 1) bump(firstPlace, r.ownerId);
      if (r.place === 2) bump(secondPlace, r.ownerId);
      if (r.place === worstPlace) bump(lastPlace, r.ownerId);
    }
  }

  const seasonsPlayed = new Map(career.map((c) => [c.ownerId, c.seasonsPlayed.length]));
  const pointsFor = new Map(career.map((c) => [c.ownerId, c.pointsFor]));
  const pointsAgainst = new Map(career.map((c) => [c.ownerId, c.pointsAgainst]));

  const awards: Award[] = [
    {
      id: "dynasty",
      title: "Dynasty",
      blurb: "Most championships won",
      unit: "titles",
      unitSingular: "title",
      decimals: 0,
      leaders: rankLeaders(firstPlace, ownerById, 0),
    },
    {
      id: "cellar-dweller",
      title: "Cellar Dweller",
      blurb: "Most last-place finishes",
      unit: "times",
      unitSingular: "time",
      decimals: 0,
      leaders: rankLeaders(lastPlace, ownerById, 0),
    },
    {
      id: "bridesmaid",
      title: "Bridesmaid",
      blurb: "Most runner-up finishes — so close, yet so far",
      unit: "times",
      unitSingular: "time",
      decimals: 0,
      leaders: rankLeaders(secondPlace, ownerById, 0),
    },
    {
      id: "nail-biter-king",
      title: "Nail-Biter King",
      blurb: `Most wins decided by fewer than ${CLOSE_MARGIN} points`,
      unit: "wins",
      unitSingular: "win",
      decimals: 0,
      leaders: rankLeaders(closeWins, ownerById, 0),
    },
    {
      id: "heartbreak-hotel",
      title: "Heartbreak Hotel",
      blurb: `Most losses decided by fewer than ${CLOSE_MARGIN} points`,
      unit: "losses",
      unitSingular: "loss",
      decimals: 0,
      leaders: rankLeaders(closeLosses, ownerById, 0),
    },
    {
      id: "point-machine",
      title: "Point Machine",
      blurb: "Most total points scored, all-time",
      unit: "pts",
      unitSingular: "pt",
      decimals: 0,
      leaders: rankLeaders(pointsFor, ownerById, 0),
    },
    {
      id: "human-turnstile",
      title: "Human Turnstile",
      blurb: "Most total points allowed, all-time — the schedule from hell",
      unit: "pts",
      unitSingular: "pt",
      decimals: 0,
      leaders: rankLeaders(pointsAgainst, ownerById, 0),
    },
    {
      id: "iron-man",
      title: "Iron Man",
      blurb: "Most seasons in the league",
      unit: "seasons",
      unitSingular: "season",
      decimals: 0,
      leaders: rankLeaders(seasonsPlayed, ownerById, 0),
    },
  ];

  return awards;
}
