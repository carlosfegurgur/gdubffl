"use client";

import Link from "next/link";
import type { SeasonSummary } from "@/lib/season-archive";
import { useSortableTable } from "@/lib/useSortableTable";
import SortableHeader from "@/components/SortableHeader";
import styles from "./page.module.css";

const columns: { key: keyof SeasonSummary; label: string }[] = [
  { key: "season", label: "Season" },
  { key: "championTeamName", label: "Champion" },
  { key: "championOwnerName", label: "Owner" },
  { key: "teamCount", label: "Teams" },
];

export default function SeasonsTable({ seasons }: { seasons: SeasonSummary[] }) {
  const { sorted, sortKey, direction, toggleSort } = useSortableTable<SeasonSummary, keyof SeasonSummary>(
    seasons,
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
              <td>
                <Link href={`/seasons/${s.season}`} className={styles.seasonLink}>
                  {s.season}
                </Link>
              </td>
              <td className={styles.emphasis}>{s.championTeamName ?? "—"}</td>
              <td className={styles.muted}>
                {s.championOwnerId ? (
                  <Link href={`/teams/${s.championOwnerId}`} className={styles.ownerLink}>
                    {s.championOwnerName}
                  </Link>
                ) : (
                  "—"
                )}
              </td>
              <td className={styles.muted}>{s.teamCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
