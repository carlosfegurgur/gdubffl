"use client";

import Link from "next/link";
import type { StandingRow } from "@/lib/season-archive";
import { useSortableTable } from "@/lib/useSortableTable";
import SortableHeader from "@/components/SortableHeader";
import styles from "./page.module.css";

const columns: { key: keyof StandingRow; label: string }[] = [
  { key: "place", label: "Place" },
  { key: "teamName", label: "Team" },
  { key: "ownerName", label: "Owner" },
  { key: "wins", label: "Record" },
  { key: "pointsFor", label: "PF" },
  { key: "pointsAgainst", label: "PA" },
];

export default function StandingsTable({ standings }: { standings: StandingRow[] }) {
  const { sorted, sortKey, direction, toggleSort } = useSortableTable<StandingRow, keyof StandingRow>(
    standings,
    "place",
    "asc"
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
            <tr key={s.ownerId}>
              <td className={s.place === 1 ? styles.champion : undefined}>{s.place ?? "—"}</td>
              <td className={styles.emphasis}>
                <Link href={`/teams/${s.ownerId}`} className={styles.teamLink}>
                  {s.teamName}
                </Link>
              </td>
              <td className={styles.muted}>{s.ownerName}</td>
              <td>
                {s.wins}-{s.losses}
                {s.ties ? `-${s.ties}` : ""}
              </td>
              <td className={styles.muted}>{s.pointsFor}</td>
              <td className={styles.muted}>{s.pointsAgainst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
