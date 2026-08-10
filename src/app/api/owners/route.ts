import { NextRequest, NextResponse } from "next/server";
import { getOwnersWithTeams } from "@/services/ownerService";

export async function GET(req: NextRequest) {
  try {
    const owners = await getOwnersWithTeams();
    return NextResponse.json(owners);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch owners" }, { status: 500 });
  }
}
