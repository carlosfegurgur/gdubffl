import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from '../prisma/generated/prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import fs from 'fs';
import path from 'path';

// Create a completely fresh instance with explicit empty config
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL })
export const prisma = new PrismaClient({ adapter })

async function main() {
    const filePath = path.join(process.cwd(), "/data/owners/all-owners.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const ownersByYear = JSON.parse(rawData);
  
    for (const year of Object.keys(ownersByYear)) {
      const season = parseInt(year, 10);
      const entries = ownersByYear[year];
  
      console.log(`Processing season ${season} with ${entries.length} teams...`);
  
      for (const entry of entries) {
        const { teamName, teamOwner } = entry;
  
        // 1️⃣ Upsert Owner
        const owner = await prisma.owner.upsert({
          where: { name: teamOwner },
          update: {},
          create: { name: teamOwner },
        });
  
        // 2️⃣ Upsert Team (same team name can repeat across years)
        const team = await prisma.team.create({
          data: {
            name: teamName,
          },
        });
  
        // 3️⃣ Link in TeamOwner (junction table)
        await prisma.teamOwner.create({
          data: {
            seasonYear: season,
            ownerId: owner.id,
            teamId: team.id,
          },
        });
  
        console.log(`✔ Inserted: ${teamName} (${teamOwner}) - ${season}`);
      }
    }
  
    console.log("All done!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
