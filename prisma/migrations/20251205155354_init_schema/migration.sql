/*
  Warnings:

  - You are about to drop the column `awayTeamId` on the `Matchup` table. All the data in the column will be lost.
  - You are about to drop the column `homeTeamId` on the `Matchup` table. All the data in the column will be lost.
  - You are about to drop the column `weekId` on the `Matchup` table. All the data in the column will be lost.
  - You are about to drop the column `abbv` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Week` table. All the data in the column will be lost.
  - You are about to drop the column `seasonId` on the `Week` table. All the data in the column will be lost.
  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlayerWeekStats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Season` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[seasonYear,weekNumber]` on the table `Week` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `awayTeam` to the `Matchup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeTeam` to the `Matchup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `week` to the `Matchup` table without a default value. This is not possible if the table is not empty.
  - Made the column `homeScore` on table `Matchup` required. This step will fail if there are existing NULL values in that column.
  - Made the column `awayScore` on table `Matchup` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `seasonYear` to the `Week` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weekNumber` to the `Week` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Matchup" DROP CONSTRAINT "Matchup_awayTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Matchup" DROP CONSTRAINT "Matchup_homeTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Matchup" DROP CONSTRAINT "Matchup_weekId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_teamId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerWeekStats" DROP CONSTRAINT "PlayerWeekStats_playerId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerWeekStats" DROP CONSTRAINT "PlayerWeekStats_weekId_fkey";

-- DropForeignKey
ALTER TABLE "Week" DROP CONSTRAINT "Week_seasonId_fkey";

-- AlterTable
ALTER TABLE "Matchup" DROP COLUMN "awayTeamId",
DROP COLUMN "homeTeamId",
DROP COLUMN "weekId",
ADD COLUMN     "awayTeam" TEXT NOT NULL,
ADD COLUMN     "homeTeam" TEXT NOT NULL,
ADD COLUMN     "week" INTEGER NOT NULL,
ALTER COLUMN "homeScore" SET NOT NULL,
ALTER COLUMN "homeScore" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "awayScore" SET NOT NULL,
ALTER COLUMN "awayScore" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "abbv";

-- AlterTable
ALTER TABLE "Week" DROP COLUMN "number",
DROP COLUMN "seasonId",
ADD COLUMN     "seasonYear" INTEGER NOT NULL,
ADD COLUMN     "weekNumber" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Player";

-- DropTable
DROP TABLE "PlayerWeekStats";

-- DropTable
DROP TABLE "Season";

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamOwner" (
    "id" SERIAL NOT NULL,
    "seasonYear" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "TeamOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "weekId" INTEGER NOT NULL,
    "homeTeamId" INTEGER NOT NULL,
    "awayTeamId" INTEGER NOT NULL,
    "homeScore" INTEGER,
    "awayScore" INTEGER,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Owner_name_key" ON "Owner"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TeamOwner_teamId_seasonYear_key" ON "TeamOwner"("teamId", "seasonYear");

-- CreateIndex
CREATE UNIQUE INDEX "Week_seasonYear_weekNumber_key" ON "Week"("seasonYear", "weekNumber");

-- AddForeignKey
ALTER TABLE "TeamOwner" ADD CONSTRAINT "TeamOwner_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamOwner" ADD CONSTRAINT "TeamOwner_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_homeTeamId_fkey" FOREIGN KEY ("homeTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
