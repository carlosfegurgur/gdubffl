"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { CareerStats } from "@/lib/team-stats";
import { useSortableTable } from "@/lib/useSortableTable";
import SortableHeader from "@/components/SortableHeader";
import styles from "./page.module.css";

type Row = CareerStats & { seasonsCount: number };

const columns: { key: keyof Row; label: string }[] = [
  { key: "teamName", label: "Team" },
  { key: "ownerName", label: "Owner" },
  { key: "seasonsCount", label: "Seasons" },
  { key: "wins", label: "Record" },
  { key: "winPct", label: "Win %" },
  { key: "avgPointsFor", label: "Avg PF" },
  { key: "avgPointsAgainst", label: "Avg PA" },
];

export default function TeamsTable({ teams }: { teams: CareerStats[] }) {
  const rows = useMemo<Row[]>(() => teams.map((t) => ({ ...t, seasonsCount: t.seasonsPlayed.length })), [teams]);
  const { sorted, sortKey, direction, toggleSort } = useSortableTable<Row, keyof Row>(rows, "winPct");

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
          {sorted.map((t, i) => (
            <tr key={t.ownerId}>
              <td>{i + 1}</td>
              <td>
                <Link href={`/teams/${t.ownerId}`} className={styles.teamLink}>
                  {t.logoUrl && <img src={t.logoUrl} alt="" className={styles.logo} />}
                  {t.teamName}
                </Link>
              </td>
              <td className={styles.muted}>{t.ownerName}</td>
              <td className={styles.muted}>{t.seasonsCount}</td>
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
  );
}
