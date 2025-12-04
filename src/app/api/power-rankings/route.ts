import { NextResponse } from "next/server";
import { computePowerRankings } from "@/lib/power-rankings";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const season = Number(url.searchParams.get("season") || "2025");
  const throughWeek = url.searchParams.has("throughWeek") ? Number(url.searchParams.get("throughWeek")) : undefined;

  const results = computePowerRankings(season, throughWeek);
  // add rank index:
  const withRank = results.map((r, i) => ({ ...r, rank: i + 1 }));
  return NextResponse.json({ season, throughWeek, rankings: withRank });
}
