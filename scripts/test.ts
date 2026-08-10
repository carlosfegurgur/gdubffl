// scripts/testPrismaConnection.ts
import dotenv from "dotenv";

// Load env variables first
dotenv.config();

import { PrismaClient } from '../prisma/generated/prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env!");
}

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL })
export const prisma = new PrismaClient({ adapter })


async function main() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to Prisma / Neon DB!");
    const count = await prisma.matchup.count().catch(() => null);
    console.log("Matchup table count:", count ?? "Table does not exist yet");
  } catch (err) {
    console.error("❌ Prisma connection failed:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
