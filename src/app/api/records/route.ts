import { NextResponse } from "next/server";
import { computeAllTimeRecords, computeGameLeaderboard } from "@/lib/records";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const seasonParam = url.searchParams.get("season");
  const season = seasonParam ? Number(seasonParam) : undefined;
  const ownerId = url.searchParams.get("ownerId") ?? undefined;

  const [records, leaderboard] = await Promise.all([
    computeAllTimeRecords(season, ownerId),
    computeGameLeaderboard(season, ownerId),
  ]);

  return NextResponse.json({ season: season ?? "all-time", ownerId: ownerId ?? "all-owners", records, leaderboard });
}
