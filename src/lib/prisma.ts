import { PrismaClient } from '../../prisma/generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon'

// Create a completely fresh instance with explicit empty config
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL })
const prisma =  new PrismaClient({ adapter })

export default prisma