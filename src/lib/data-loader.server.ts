import fs from "fs";
import path from "path";

export type Owner = { id: string; name: string; teamName: string; logoUrl?: string };
export type Matchup = {
  id: string;
  homeOwnerId: string;
  awayOwnerId: string;
  homeScore: number;
  awayScore: number;
  isPlayoff?: boolean;
  date?: string;
  week?: number;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Week = { week: number; matchups: Matchup[]; teamStats?: Record<string, any> };
export type SeasonFile = { season: number; weeks: Week[] };

const DATA_DIR = path.join(process.cwd(), "src", "data");

export function loadOwners(): Owner[] {
  const file = path.join(DATA_DIR, "owners.json");
  const raw = fs.readFileSync(file, "utf8");
  return JSON.parse(raw) as Owner[];
}

export function loadSeason(season: number): SeasonFile {
  const file = path.join(DATA_DIR, `${season}-season.json`);
  const raw = fs.readFileSync(file, "utf8");
  return JSON.parse(raw) as SeasonFile;
}

/** Flatten all matchups across weeks */
export function loadAllMatchups(season: number): Matchup[] {
  const s = loadSeason(season);
  const arr: Matchup[] = [];
  s.weeks.forEach((w) => {
    w.matchups.forEach((m) => {
      arr.push({ ...m, week: w.week });
    });
  });
  return arr;
}
