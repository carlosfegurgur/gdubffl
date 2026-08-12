import { loadOwners, listAvailableSeasons } from "@/lib/data-loader.server";
import MatchupsClient from "./MatchupsClient";
import styles from "./page.module.css";

export default async function Page() {
  const owners = await loadOwners();
  const seasons = await listAvailableSeasons();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Matchups</h1>
      <MatchupsClient owners={owners} seasons={seasons} />
    </main>
  );
}
