/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from "dotenv";
dotenv.config();

// console.log('DATABASE_URL:', process.env.DATABASE_URL);

// Import from the generated location directly
import { PrismaClient } from '../prisma/generated/prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import fs from "fs";
import path from "path";

// Create a completely fresh instance with explicit empty config
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL })
export const prisma = new PrismaClient({ adapter })

async function main() {
  try {
    await prisma.$connect();
    console.log('✓ Connected to database');
  } catch (error) {
    console.error('✗ Failed to connect to database:', error);
    throw error;
  }

  const dir = path.join(process.cwd(), "data"); // folder with JSON files

  if (!fs.existsSync(dir)) {
    console.error("❌ Data folder not found:", dir);
    return;
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith(".json"));

  if (files.length === 0) {
    console.warn("⚠️ No JSON files found in data folder");
    return;
  }

  for (const file of files) {
    const filePath = path.join(dir, file);
    const json = JSON.parse(fs.readFileSync(filePath, "utf8"));

    console.log(`📥 Importing ${file}...`);

    for (const weekKey of Object.keys(json)) {
      const matchups = json[weekKey];
      if (!Array.isArray(matchups)) {
        console.warn(`⚠️ Skipping ${weekKey} in ${file}, not an array`);
        continue;
      }

      const weekNumber = parseInt(weekKey.replace("week-", ""), 10);

      const data = matchups.map((m: any) => ({
        week: weekNumber,
        homeTeam: m.homeTeam,
        awayTeam: m.awayTeam,
        homeScore: Number(m.homeScore),
        awayScore: Number(m.awayScore),
      }));

      await prisma.matchup.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`✅ Week ${weekNumber} imported (${matchups.length} matchups)`);
    }
  }

  console.log("🎉 All files imported successfully!");
}

main()
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });