import { NextResponse } from "next/server";
import { computeAllTimeRecords, computeGameLeaderboard } from "@/lib/records";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const seasonParam = url.searchParams.get("season");
  const season = seasonParam ? Number(seasonParam) : undefined;

  const [records, leaderboard] = await Promise.all([
    computeAllTimeRecords(season),
    computeGameLeaderboard(season),
  ]);

  return NextResponse.json({ season: season ?? "all-time", records, leaderboard });
}
