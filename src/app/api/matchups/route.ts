import { NextResponse } from "next/server";
import { computeHeadToHead } from "@/lib/matchup-utils";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const season = Number(url.searchParams.get("season") || "2025");
  const teamA = url.searchParams.get("teamA");
  const teamB = url.searchParams.get("teamB");
  if (!teamA || !teamB) return NextResponse.json({ error: "teamA and teamB are required" }, { status: 400 });
  const summary = computeHeadToHead(season, teamA, teamB);
  return NextResponse.json({ season, teamA, teamB, summary });
}
