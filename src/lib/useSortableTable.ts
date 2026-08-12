import { useMemo, useState } from "react";

export type SortDirection = "asc" | "desc";

/**
 * Client-side table sorting by a single column key. Clicking the same
 * column again flips direction; clicking a new column starts descending
 * (most tables here want "biggest first" as the natural first click).
 */
export function useSortableTable<T, K extends keyof T>(data: T[], initialKey?: K, initialDirection: SortDirection = "desc") {
  const [sortKey, setSortKey] = useState<K | undefined>(initialKey);
  const [direction, setDirection] = useState<SortDirection>(initialDirection);

  const sorted = useMemo(() => {
    if (!sortKey) return data;
    const copy = [...data];
    copy.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      // Missing values always sort last, regardless of direction.
      if (av === undefined || av === null) return bv === undefined || bv === null ? 0 : 1;
      if (bv === undefined || bv === null) return -1;

      const cmp = typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
      return direction === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [data, sortKey, direction]);

  function toggleSort(key: K) {
    if (key === sortKey) {
      setDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setDirection("desc");
    }
  }

  return { sorted, sortKey, direction, toggleSort };
}
