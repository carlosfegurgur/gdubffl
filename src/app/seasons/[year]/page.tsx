import Link from "next/link";
import { notFound } from "next/navigation";
import { loadSeason } from "@/lib/data-loader.server";
import { computeSeasonStandings, computePlayoffBracket } from "@/lib/season-archive";
import StandingsTable from "./StandingsTable";
import PlayoffBracket from "./PlayoffBracket";
import SeasonWeeks from "./SeasonWeeks";
import styles from "./page.module.css";

export default async function SeasonDetailPage({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearParam } = await params;
  const year = Number(yearParam);
  if (!Number.isFinite(year)) notFound();

  const [seasonFile, standings, bracket] = await Promise.all([
    loadSeason(year),
    computeSeasonStandings(year),
    computePlayoffBracket(year),
  ]);

  if (standings.length === 0) notFound();

  const teamNames = Object.fromEntries(standings.map((s) => [s.ownerId, s.teamName]));
  const champion = standings.find((s) => s.place === 1);

  return (
    <main className={styles.page}>
      <Link href="/seasons" className={styles.back}>
        ← All Seasons
      </Link>

      <header className={styles.header}>
        <p className={styles.eyebrow}>{year} Season</p>
        <h1 className={styles.title}>{champion ? champion.teamName : `${year} Season`}</h1>
        {champion && (
          <p className={styles.subtitle}>
            League Champion ·{" "}
            <Link href={`/teams/${champion.ownerId}`} className={styles.ownerLink}>
              {champion.ownerName}
            </Link>
          </p>
        )}
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Standings</h2>
        <StandingsTable standings={standings} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Playoffs</h2>
        <PlayoffBracket rounds={bracket} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Weekly Matchups</h2>
        <SeasonWeeks weeks={seasonFile.weeks} teamNames={teamNames} />
      </section>
    </main>
  );
}
