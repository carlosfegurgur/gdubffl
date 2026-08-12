import prisma from "./prisma";

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
export type Week = { week: number; matchups: Matchup[] };
export type SeasonFile = { season: number; weeks: Week[] };

export type RosterPlayer = {
  slot: string;
  name: string;
  position: string;
  nflTeam: string;
  points: number;
  starter: boolean;
};
export type FinalRoster = {
  week: number;
  teamId: string;
  teamName: string;
  /** Final standing for the season, e.g. 1 = champion. Undefined if not scraped. */
  place?: number;
  players: RosterPlayer[];
};
export type RostersFile = { season: number; rosters: Record<string, FinalRoster> };

/** Season years that have at least one scraped matchup, newest first. */
export async function listAvailableSeasons(): Promise<number[]> {
  const rows = await prisma.matchup.findMany({
    select: { season: true },
    distinct: ["season"],
    orderBy: { season: "desc" },
  });
  return rows.map((r) => r.season);
}

export async function loadOwners(): Promise<Owner[]> {
  const rows = await prisma.owner.findMany({ orderBy: { name: "asc" } });
  return rows.map((o) => ({ id: o.id, name: o.name, teamName: o.teamName, logoUrl: o.logoUrl ?? undefined }));
}

export async function loadSeason(season: number): Promise<SeasonFile> {
  const rows = await prisma.matchup.findMany({
    where: { season },
    include: { homeOwner: true, awayOwner: true },
    orderBy: [{ week: "asc" }],
  });

  const weekMap = new Map<number, Matchup[]>();
  for (const m of rows) {
    const matchup: Matchup = {
      id: m.id,
      homeOwnerId: m.homeOwnerId,
      homeOwnerName: m.homeOwner.name,
      awayOwnerId: m.awayOwnerId,
      awayOwnerName: m.awayOwner.name,
      homeScore: m.homeScore,
      awayScore: m.awayScore,
      isPlayoff: m.isPlayoff,
    };
    if (!weekMap.has(m.week)) weekMap.set(m.week, []);
    weekMap.get(m.week)!.push(matchup);
  }

  const weeks = Array.from(weekMap.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([week, matchups]) => ({ week, matchups }));

  return { season, weeks };
}

/** Final-week rosters for a season, keyed by ownerId. */
export async function loadFinalRosters(season: number): Promise<RostersFile> {
  const seasonTeams = await prisma.seasonTeam.findMany({
    where: { season },
    include: { players: true },
  });

  const rosters: Record<string, FinalRoster> = {};
  for (const st of seasonTeams) {
    rosters[st.ownerId] = {
      week: st.week,
      teamId: st.teamId,
      teamName: st.teamName,
      place: st.place ?? undefined,
      players: st.players.map((p) => ({
        slot: p.slot,
        name: p.name,
        position: p.position,
        nflTeam: p.nflTeam,
        points: p.points,
        starter: p.starter,
      })),
    };
  }

  return { season, rosters };
}

/** Flatten all matchups across weeks */
export async function loadAllMatchups(season: number): Promise<Matchup[]> {
  const s = await loadSeason(season);
  const arr: Matchup[] = [];
  s.weeks.forEach((w) => {
    w.matchups.forEach((m) => {
      arr.push({ ...m, week: w.week });
    });
  });
  return arr;
}
