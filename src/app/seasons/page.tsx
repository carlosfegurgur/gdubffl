import { computeSeasonSummaries } from "@/lib/season-archive";
import SeasonsTable from "./SeasonsTable";
import styles from "./page.module.css";

export default async function SeasonsPage() {
  const seasons = await computeSeasonSummaries();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Season Archive</h1>
      <p className={styles.subtitle}>Every scraped season, standings, and playoff bracket.</p>

      <SeasonsTable seasons={seasons} />
    </main>
  );
}
