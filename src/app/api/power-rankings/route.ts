import { NextResponse } from "next/server";
import { listAvailableSeasons } from "@/lib/data-loader.server";
import { computePowerRankings } from "@/lib/power-rankings";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const throughWeek = url.searchParams.has("throughWeek") ? Number(url.searchParams.get("throughWeek")) : undefined;

  const seasonParam = url.searchParams.get("season");
  const season = seasonParam ? Number(seasonParam) : (await listAvailableSeasons())[0];
  if (season === undefined) {
    return NextResponse.json({ season: null, throughWeek, rankings: [] });
  }

  const results = await computePowerRankings(season, throughWeek);
  const withRank = results.map((r, i) => ({ ...r, rank: i + 1 }));
  return NextResponse.json({ season, throughWeek, rankings: withRank });
}
