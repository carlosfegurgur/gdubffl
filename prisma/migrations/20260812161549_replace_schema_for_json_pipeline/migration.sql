/*
  Warnings:

  Full schema replacement for the scraped-JSON data pipeline (src/data/).
  The old Owner/Team/TeamOwner tables held team-name-only data with no
  scores or rosters; Matchup/Week/Match were unused (0 rows). All are
  dropped and replaced with tables that directly mirror owners.json,
  <season>-season.json, and rosters/<season>.json.

*/
-- DropForeignKey (old schema)
ALTER TABLE "TeamOwner" DROP CONSTRAINT IF EXISTS "TeamOwner_teamId_fkey";
ALTER TABLE "TeamOwner" DROP CONSTRAINT IF EXISTS "TeamOwner_ownerId_fkey";
ALTER TABLE "Match" DROP CONSTRAINT IF EXISTS "Match_weekId_fkey";
ALTER TABLE "Match" DROP CONSTRAINT IF EXISTS "Match_homeTeamId_fkey";
ALTER TABLE "Match" DROP CONSTRAINT IF EXISTS "Match_awayTeamId_fkey";

-- DropTable (old schema)
DROP TABLE IF EXISTS "TeamOwner";
DROP TABLE IF EXISTS "Match";
DROP TABLE IF EXISTS "Week";
DROP TABLE IF EXISTS "Matchup";
DROP TABLE IF EXISTS "Team";
DROP TABLE IF EXISTS "Owner";

-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "logoUrl" TEXT,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matchup" (
    "id" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "homeOwnerId" TEXT NOT NULL,
    "awayOwnerId" TEXT NOT NULL,
    "homeScore" DOUBLE PRECISION NOT NULL,
    "awayScore" DOUBLE PRECISION NOT NULL,
    "isPlayoff" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Matchup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeasonTeam" (
    "id" SERIAL NOT NULL,
    "season" INTEGER NOT NULL,
    "ownerId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "place" INTEGER,

    CONSTRAINT "SeasonTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RosterPlayer" (
    "id" SERIAL NOT NULL,
    "seasonTeamId" INTEGER NOT NULL,
    "slot" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "nflTeam" TEXT NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,
    "starter" BOOLEAN NOT NULL,

    CONSTRAINT "RosterPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Matchup_season_idx" ON "Matchup"("season");

-- CreateIndex
CREATE INDEX "Matchup_homeOwnerId_idx" ON "Matchup"("homeOwnerId");

-- CreateIndex
CREATE INDEX "Matchup_awayOwnerId_idx" ON "Matchup"("awayOwnerId");

-- CreateIndex
CREATE UNIQUE INDEX "SeasonTeam_season_ownerId_key" ON "SeasonTeam"("season", "ownerId");

-- CreateIndex
CREATE INDEX "RosterPlayer_seasonTeamId_idx" ON "RosterPlayer"("seasonTeamId");

-- AddForeignKey
ALTER TABLE "Matchup" ADD CONSTRAINT "Matchup_homeOwnerId_fkey" FOREIGN KEY ("homeOwnerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matchup" ADD CONSTRAINT "Matchup_awayOwnerId_fkey" FOREIGN KEY ("awayOwnerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeasonTeam" ADD CONSTRAINT "SeasonTeam_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RosterPlayer" ADD CONSTRAINT "RosterPlayer_seasonTeamId_fkey" FOREIGN KEY ("seasonTeamId") REFERENCES "SeasonTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;
