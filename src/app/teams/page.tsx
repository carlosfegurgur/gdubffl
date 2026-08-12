import { computeCareerStats } from "@/lib/team-stats";
import TeamsTable from "./TeamsTable";
import styles from "./page.module.css";

export default async function TeamsPage() {
  const teams = await computeCareerStats();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Teams</h1>
      <p className={styles.subtitle}>Career records across every scraped season.</p>

      <TeamsTable teams={teams} />
    </main>
  );
}
