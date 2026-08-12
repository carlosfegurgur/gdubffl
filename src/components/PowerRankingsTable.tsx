"use client";

import { useSortableTable } from "@/lib/useSortableTable";
import SortableHeader from "./SortableHeader";
import styles from "./PowerRankingsTable.module.css";

type Row = {
  ownerId: string;
  teamName?: string;
  score: number;
  avgPointsFor: number;
  avgPointsAgainst: number;
  winPct: number;
  rank?: number;
};

const columns: { key: keyof Row; label: string }[] = [
  { key: "teamName", label: "Team" },
  { key: "score", label: "Score" },
  { key: "avgPointsFor", label: "Avg PF" },
  { key: "avgPointsAgainst", label: "Avg PA" },
  { key: "winPct", label: "Win %" },
];

export default function PowerRankingsTable({ rows }: { rows: Row[] }) {
  const { sorted, sortKey, direction, toggleSort } = useSortableTable<Row, keyof Row>(rows, "score");

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
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
          {sorted.map((r, i) => (
            <tr key={r.ownerId}>
              <td>{i + 1}</td>
              <td className={styles.teamCell}>{r.teamName ?? r.ownerId}</td>
              <td className={styles.emphasis}>{r.score}</td>
              <td>{r.avgPointsFor}</td>
              <td>{r.avgPointsAgainst}</td>
              <td>{Math.round((r.winPct ?? 0) * 100)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
