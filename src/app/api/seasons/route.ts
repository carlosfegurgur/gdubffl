import prisma from '@/lib/prisma';
import { NextResponse } from "next/server";

export async function GET() {
  const allData = await prisma.matchup.findMany();
  return NextResponse.json(allData)
//   console.log("all data", JSON.stringify(allData, null, 2));
}

// getAllMatchups()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
