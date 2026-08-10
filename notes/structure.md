your-project/
│
├── prisma/
│   ├── schema.prisma          # Your database models
│   └── migrations/            # Auto-generated migrations
│
├── src/
│   ├── app/                   # Next.js app router
│   │   ├── api/
│   │   │   ├── matchups/
│   │   │   │   └── [season]/[week]/route.ts   # GET /api/matchups/2012/1
│   │   │   ├── seasons/
│   │   │   │   └── route.ts   # GET /api/seasons
│   │   │   └── ... more API endpoints
│   │   ├── (site)/            # your website UI pages
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/            # Reusable React components
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client singleton
│   │   └── types.ts           # Shared TypeScript types for scraper + frontend
│   │
│   ├── utils/                 # small helpers
│   └── styles/                # CSS / tailwind / etc.
│
├── scraper/                   # <— Your node-based scraper lives here
│   ├── scrapeSeasonWeek.js
│   ├── scrapeSeasonAllWeeks.js
│   ├── parseGame.js           # helpers to parse HTML into JSON
│   ├── selectors.js
│   ├── insertToDb.js          # uses Prisma to save scraped data
│   ├── README.md
│   └── output/                # temporary raw JSON
│
├── scripts/
│   └── deploy.sh              # optional
│
├── .env                       # DATABASE_URL=... (Neon)
├── package.json
└── README.md
---

PIPELINE
Scraper → JSON → Seed → Normalize → Prisma → API → Frontend page