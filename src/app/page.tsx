import Link from "next/link";
import { computeChampionSpotlight, computeSeasonSummaries } from "@/lib/season-archive";
import { computeLeagueTotals } from "@/lib/records";
import ChampionSpotlight from "./ChampionSpotlight";
import MatchupCompareCard from "./MatchupCompareCard";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";

const RECENT_SEASONS_COUNT = 5;

const exploreLinks = [
  { href: "/rankings", title: "Power Rankings", description: "See how every team stacks up this season." },
  { href: "/matchups", title: "Matchups", description: "Head-to-head results, week by week." },
  { href: "/records", title: "Records", description: "All-time bests, blowouts, and streaks." },
  { href: "/teams", title: "Teams", description: "Every owner and their team history." },
  { href: "/seasons", title: "Seasons", description: "Standings and playoff brackets, year by year." },
];

export default async function Home() {
  const [spotlight, seasons, totals] = await Promise.all([
    computeChampionSpotlight(),
    computeSeasonSummaries(),
    computeLeagueTotals(),
  ]);

  const recentSeasons = seasons.slice(0, RECENT_SEASONS_COUNT);

  const metricItems = [
    { eyebrow: "Seasons", title: String(totals.seasons) },
    { eyebrow: "Matchups Played", title: totals.matchups.toLocaleString() },
    { eyebrow: "Points Scored", title: totals.pointsScored.toLocaleString() },
    { eyebrow: "Managers", title: String(totals.managers) },
  ];

  return (
    <main className={styles.page}>
      {spotlight && (
        <section className={styles.hero}>
          <ChampionSpotlight spotlight={spotlight} />
          <MatchupCompareCard spotlight={spotlight} />
        </section>
      )}

      <section className={styles.metricStrip}>
        {metricItems.map((m) => (
          <Card key={m.eyebrow} eyebrow={m.eyebrow} title={m.title} emphasis />
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore</h2>
        <div className={styles.exploreGrid}>
          {exploreLinks.map((link) => (
            <Card key={link.href} href={link.href} title={link.title} description={link.description} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recent Seasons</h2>
          <Link href="/seasons" className={styles.sectionLink}>
            View all seasons →
          </Link>
        </div>
        <div className={styles.seasonsGrid}>
          {recentSeasons.map((s) => (
            <Card
              key={s.season}
              href={`/seasons/${s.season}`}
              eyebrow={String(s.season)}
              title={s.championTeamName ?? "—"}
              description={s.championOwnerName ? `${s.championOwnerName} · Champion` : undefined}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
