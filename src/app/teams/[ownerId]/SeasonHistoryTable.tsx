"use client";

import type { SeasonStats } from "@/lib/team-stats";
import { useSortableTable } from "@/lib/useSortableTable";
import SortableHeader from "@/components/SortableHeader";
import styles from "./page.module.css";

function ordinal(n: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return `${n}${suffixes[(v - 20) % 10] ?? suffixes[v] ?? suffixes[0]}`;
}

const columns: { key: keyof SeasonStats; label: string }[] = [
  { key: "season", label: "Season" },
  { key: "teamName", label: "Team Name" },
  { key: "place", label: "Finish" },
  { key: "wins", label: "Record" },
  { key: "pointsFor", label: "PF" },
  { key: "pointsAgainst", label: "PA" },
];

export default function SeasonHistoryTable({ seasonStats }: { seasonStats: SeasonStats[] }) {
  const { sorted, sortKey, direction, toggleSort } = useSortableTable<SeasonStats, keyof SeasonStats>(
    seasonStats,
    "season"
  );

  return (
    <div className={styles.tableWrap}>
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
          {sorted.map((s) => (
            <tr key={s.season}>
              <td>{s.season}</td>
              <td>{s.teamName}</td>
              <td className={s.place === 1 ? styles.champion : undefined}>{s.place ? ordinal(s.place) : "—"}</td>
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
  );
}
