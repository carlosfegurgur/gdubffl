import { NextResponse } from "next/server";
import { loadSeason, loadFinalRosters } from "@/lib/data-loader.server";

export async function GET(_request: Request, { params }: { params: Promise<{ season: string }> }) {
  const { season: seasonParam } = await params;
  const season = Number(seasonParam);
  if (!Number.isFinite(season)) {
    return NextResponse.json({ error: "Invalid season" }, { status: 400 });
  }

  let seasonFile;
  try {
    seasonFile = loadSeason(season);
  } catch {
    return NextResponse.json({ error: "Season not found" }, { status: 404 });
  }

  let teamNames: Record<string, string> = {};
  try {
    const rosters = loadFinalRosters(season);
    teamNames = Object.fromEntries(Object.entries(rosters.rosters).map(([id, r]) => [id, r.teamName]));
  } catch {
    // no roster file for this season; MatchupViewer falls back to owner name
  }

  return NextResponse.json({ season, weeks: seasonFile.weeks, teamNames });
}
