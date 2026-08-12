import { listAvailableSeasons } from "@/lib/data-loader.server";
import { computeAllTimeRecords, computeGameLeaderboard } from "@/lib/records";
import RecordsClient from "./RecordsClient";
import styles from "./page.module.css";

export default async function RecordsPage() {
  const seasons = await listAvailableSeasons();
  const [records, leaderboard] = await Promise.all([computeAllTimeRecords(), computeGameLeaderboard()]);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Records</h1>
      <RecordsClient seasons={seasons} initialRecords={records} initialLeaderboard={leaderboard} />
    </main>
  );
}
