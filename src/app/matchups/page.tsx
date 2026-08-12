import { loadOwners, listAvailableSeasons } from "@/lib/data-loader.server";
import MatchupsClient from "./MatchupsClient";
import styles from "./page.module.css";

export default function Page() {
  const owners = loadOwners();
  const seasons = listAvailableSeasons();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Matchups</h1>
      <MatchupsClient owners={owners} seasons={seasons} />
    </main>
  );
}
