import Link from "next/link";
import { notFound } from "next/navigation";
import { loadOwners, loadFinalRosters } from "@/lib/data-loader.server";
import type { FinalRoster } from "@/lib/data-loader.server";
import { computeSeasonStats } from "@/lib/team-stats";
import RosterViewer from "./RosterViewer";
import styles from "./page.module.css";

export default async function TeamDetailPage({ params }: { params: Promise<{ ownerId: string }> }) {
  const { ownerId } = await params;
  const owner = loadOwners().find((o) => o.id === ownerId);
  if (!owner) notFound();

  const seasonStats = computeSeasonStats(ownerId);

  const rostersBySeason: Record<number, FinalRoster> = {};
  for (const s of seasonStats) {
    try {
      const rosters = loadFinalRosters(s.season);
      const roster = rosters.rosters[ownerId];
      if (roster) rostersBySeason[s.season] = roster;
    } catch {
      // no roster file for this season
    }
  }

  const career = seasonStats.reduce(
    (acc, s) => ({
      wins: acc.wins + s.wins,
      losses: acc.losses + s.losses,
      ties: acc.ties + s.ties,
      pointsFor: acc.pointsFor + s.pointsFor,
      pointsAgainst: acc.pointsAgainst + s.pointsAgainst,
    }),
    { wins: 0, losses: 0, ties: 0, pointsFor: 0, pointsAgainst: 0 }
  );
  const totalGames = career.wins + career.losses + career.ties || 1;

  return (
    <main className={styles.page}>
      <Link href="/teams" className={styles.back}>
        ← All Teams
      </Link>

      <header className={styles.header}>
        {owner.logoUrl && <img src={owner.logoUrl} alt="" className={styles.logo} />}
        <div>
          <h1 className={styles.title}>{owner.teamName}</h1>
          <p className={styles.owner}>{owner.name}</p>
        </div>
      </header>

      <section className={styles.statsRow}>
        <Stat label="Seasons" value={seasonStats.length} />
        <Stat label="Record" value={`${career.wins}-${career.losses}${career.ties ? `-${career.ties}` : ""}`} />
        <Stat label="Win %" value={`${Math.round((career.wins / totalGames) * 100)}%`} />
        <Stat label="Total PF" value={career.pointsFor.toFixed(1)} />
        <Stat label="Total PA" value={career.pointsAgainst.toFixed(1)} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Season History</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Season</th>
                <th>Team Name</th>
                <th>Record</th>
                <th>PF</th>
                <th>PA</th>
              </tr>
            </thead>
            <tbody>
              {seasonStats.map((s) => (
                <tr key={s.season}>
                  <td>{s.season}</td>
                  <td>{s.teamName}</td>
                  <td>
                    {s.wins}-{s.losses}
                    {s.ties ? `-${s.ties}` : ""}
                  </td>
                  <td>{s.pointsFor}</td>
                  <td>{s.pointsAgainst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {seasonStats.length > 0 && (
        <RosterViewer rostersBySeason={rostersBySeason} seasons={seasonStats.map((s) => s.season)} />
      )}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}
