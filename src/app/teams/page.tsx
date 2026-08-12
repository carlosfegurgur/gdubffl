import Link from "next/link";
import { computeCareerStats } from "@/lib/team-stats";
import styles from "./page.module.css";

export default function TeamsPage() {
  const teams = computeCareerStats();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Teams</h1>
      <p className={styles.subtitle}>Career records across every scraped season.</p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Owner</th>
              <th>Seasons</th>
              <th>Record</th>
              <th>Win %</th>
              <th>Avg PF</th>
              <th>Avg PA</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((t, i) => (
              <tr key={t.ownerId}>
                <td>{i + 1}</td>
                <td>
                  <Link href={`/teams/${t.ownerId}`} className={styles.teamLink}>
                    {t.logoUrl && <img src={t.logoUrl} alt="" className={styles.logo} />}
                    {t.teamName}
                  </Link>
                </td>
                <td className={styles.muted}>{t.ownerName}</td>
                <td className={styles.muted}>{t.seasonsPlayed.length}</td>
                <td>
                  {t.wins}-{t.losses}
                  {t.ties ? `-${t.ties}` : ""}
                </td>
                <td>{Math.round(t.winPct * 100)}%</td>
                <td className={styles.muted}>{t.avgPointsFor}</td>
                <td className={styles.muted}>{t.avgPointsAgainst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
