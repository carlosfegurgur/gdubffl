"use client";

import styles from "./SortableHeader.module.css";
import type { SortDirection } from "@/lib/useSortableTable";

export default function SortableHeader({
  label,
  active,
  direction,
  onClick,
}: {
  label: string;
  active: boolean;
  direction: SortDirection;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {label}
      <span className={active ? styles.arrowActive : styles.arrow}>{active && direction === "asc" ? "▲" : "▼"}</span>
    </button>
  );
}
