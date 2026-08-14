import { listAvailableSeasons } from "@/lib/data-loader.server";
import { computePowerRankings } from "@/lib/power-rankings";
import RankingsClient from "./RankingsClient";
import styles from "./page.module.css";

export default async function RankingsPage() {
  const seasons = await listAvailableSeasons();
  const season = seasons[0];
  const rankings = season !== undefined ? await computePowerRankings(season) : [];

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Power Rankings</h1>
      <p className={styles.subtitle}>
        Using the Oberon Mt./OIL Power Rating formula — see the note below the table for how it&apos;s calculated.
      </p>
      <RankingsClient seasons={seasons} initialSeason={season} initialRankings={rankings} />
    </main>
  );
}
