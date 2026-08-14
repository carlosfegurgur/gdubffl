"use client";

import Link from "next/link";
import type { PowerRanking } from "@/lib/power-rankings";
import { useSortableTable } from "@/lib/useSortableTable";
import SortableHeader from "./SortableHeader";
import styles from "./PowerRankingsTable.module.css";

const columns: { key: keyof PowerRanking; label: string }[] = [
  { key: "teamName", label: "Team" },
  { key: "adjustedOPR", label: "Adj. OPR" },
  { key: "rawOPR", label: "Raw OPR" },
  { key: "avgScore", label: "Avg Score" },
  { key: "highScore", label: "High" },
  { key: "lowScore", label: "Low" },
  { key: "winPct", label: "Win %" },
];

export default function PowerRankingsTable({ rows }: { rows: PowerRanking[] }) {
  const { sorted, sortKey, direction, toggleSort } = useSortableTable<PowerRanking, keyof PowerRanking>(
    rows,
    "adjustedOPR"
  );

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
              <td className={styles.teamCell}>
                <Link href={`/teams/${r.ownerId}`} className={styles.teamLink}>
                  {r.logoUrl && <img src={r.logoUrl} alt="" className={styles.logo} />}
                  {r.teamName}
                </Link>
              </td>
              <td className={styles.emphasis}>{r.adjustedOPR.toFixed(3)}</td>
              <td>{r.rawOPR}</td>
              <td>{r.avgScore}</td>
              <td>{r.highScore}</td>
              <td>{r.lowScore}</td>
              <td>{Math.round(r.winPct * 100)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
