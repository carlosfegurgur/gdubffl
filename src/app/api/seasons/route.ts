import { NextResponse } from "next/server";
import { listAvailableSeasons } from "@/lib/data-loader.server";

export async function GET() {
  return NextResponse.json({ seasons: await listAvailableSeasons() });
}
