import Link from "next/link";
import { loadOwners } from "@/lib/data-loader.server";
import { computePowerRankings } from "@/lib/power-rankings";
import styles from "./page.module.css";

const CURRENT_SEASON = 2025;
const LEAGUE_NAME = "GDUBFFL";

const links = [
  { href: "/rankings", title: "Power Rankings", description: "See how every team stacks up this season." },
  { href: "/matchups", title: "Matchups", description: "Head-to-head results, week by week." },
  { href: "/teams", title: "Teams", description: "Every owner and their team history." },
];

export default async function Home() {
  const owners = await loadOwners();
  const ownerMap = new Map(owners.map((o) => [o.id, o]));

  const rankings = await computePowerRankings(CURRENT_SEASON);
  const top3 = rankings
    .slice(0, 3)
    .map((r, i) => ({
      ...r,
      rank: i + 1,
      teamName: ownerMap.get(r.ownerId)?.teamName ?? r.ownerId,
      ownerName: ownerMap.get(r.ownerId)?.name,
    }));

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>{CURRENT_SEASON} Season</p>
        <h1 className={styles.title}>{LEAGUE_NAME}</h1>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Power Rankings</h2>
          <Link href="/rankings" className={styles.sectionLink}>
            View full rankings →
          </Link>
        </div>
        <ol className={styles.top3}>
          {top3.map((r) => (
            <li key={r.ownerId} className={styles.top3Item}>
              <span className={styles.top3Rank}>{r.rank}</span>
              <div className={styles.top3Info}>
                <span className={styles.top3Team}>{r.teamName}</span>
                {r.ownerName && <span className={styles.top3Owner}>{r.ownerName}</span>}
              </div>
              <span className={styles.top3Score}>{r.score}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.cards}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.card}>
            <h3>{link.title}</h3>
            <p>{link.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
