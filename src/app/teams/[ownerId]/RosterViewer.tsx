"use client";

import { useState } from "react";
import type { FinalRoster } from "@/lib/data-loader.server";
import { useSortableTable } from "@/lib/useSortableTable";
import SortableHeader from "@/components/SortableHeader";
import styles from "./RosterViewer.module.css";

type RosterPlayer = FinalRoster["players"][number];

const columns: { key: keyof RosterPlayer; label: string }[] = [
  { key: "slot", label: "Slot" },
  { key: "name", label: "Player" },
  { key: "position", label: "Pos" },
  { key: "nflTeam", label: "NFL" },
  { key: "points", label: "Pts" },
];

export default function RosterViewer({
  rostersBySeason,
  seasons,
}: {
  rostersBySeason: Record<number, FinalRoster>;
  seasons: number[];
}) {
  const seasonsWithRosters = seasons.filter((s) => (rostersBySeason[s]?.players.length ?? 0) > 0);
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

function PlayerTable({ title, players }: { title: string; players: RosterPlayer[] }) {
  const { sorted, sortKey, direction, toggleSort } = useSortableTable<RosterPlayer, keyof RosterPlayer>(players);

  if (players.length === 0) return null;
  return (
    <div className={styles.tableWrap}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>
                <SortableHeader
                  label={col.label}
                  active={sortKey === col.key}
                  direction={direction}
                  onClick={() => toggleSort(col.key)}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((p, i) => (
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
