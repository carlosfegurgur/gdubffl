import { NextResponse } from "next/server";
import { loadSeason, loadFinalRosters } from "@/lib/data-loader.server";

export async function GET(_request: Request, { params }: { params: Promise<{ season: string }> }) {
  const { season: seasonParam } = await params;
  const season = Number(seasonParam);
  if (!Number.isFinite(season)) {
    return NextResponse.json({ error: "Invalid season" }, { status: 400 });
  }

  const seasonFile = await loadSeason(season);
  if (seasonFile.weeks.length === 0) {
    return NextResponse.json({ error: "Season not found" }, { status: 404 });
  }

  const rosters = await loadFinalRosters(season);
  const teamNames = Object.fromEntries(Object.entries(rosters.rosters).map(([id, r]) => [id, r.teamName]));

  return NextResponse.json({ season, weeks: seasonFile.weeks, teamNames });
}
