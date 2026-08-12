"use client";

import { useState } from "react";
import type { FinalRoster } from "@/lib/data-loader.server";
import styles from "./RosterViewer.module.css";

export default function RosterViewer({
  rostersBySeason,
  seasons,
}: {
  rostersBySeason: Record<number, FinalRoster>;
  seasons: number[];
}) {
  const seasonsWithRosters = seasons.filter((s) => rostersBySeason[s]);
  const [season, setSeason] = useState<number | undefined>(seasonsWithRosters[0]);
  const roster = season !== undefined ? rostersBySeason[season] : undefined;

  if (seasonsWithRosters.length === 0) return null;

  const starters = roster?.players.filter((p) => p.starter) ?? [];
  const bench = roster?.players.filter((p) => !p.starter) ?? [];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Final Roster</h2>
        <label className={styles.field}>
          Season
          <select value={season} onChange={(e) => setSeason(Number(e.target.value))}>
            {seasonsWithRosters.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      {roster && (
        <>
          <p className={styles.meta}>
            {roster.teamName} · Week {roster.week} lineup
          </p>
          <PlayerTable title="Starters" players={starters} />
          <PlayerTable title="Bench" players={bench} />
        </>
      )}
    </section>
  );
}

function PlayerTable({ title, players }: { title: string; players: FinalRoster["players"] }) {
  if (players.length === 0) return null;
  return (
    <div className={styles.tableWrap}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Slot</th>
            <th>Player</th>
            <th>Pos</th>
            <th>NFL</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr key={`${p.name}-${i}`}>
              <td>{p.slot}</td>
              <td>{p.name}</td>
              <td>{p.position}</td>
              <td>{p.nflTeam}</td>
              <td>{p.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
