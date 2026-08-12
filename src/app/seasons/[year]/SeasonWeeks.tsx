"use client";

import { useState } from "react";
import type { Week } from "@/lib/data-loader.server";
import MatchupViewer from "@/components/MatchupViewer";
import styles from "./page.module.css";

export default function SeasonWeeks({ weeks, teamNames }: { weeks: Week[]; teamNames: Record<string, string> }) {
  const [week, setWeek] = useState<number>(weeks[0]?.week ?? 1);
  const current = weeks.find((w) => w.week === week);

  if (weeks.length === 0) return null;

  return (
    <div className={styles.weeksBlock}>
      <label className={styles.field}>
        Week
        <select value={week} onChange={(e) => setWeek(Number(e.target.value))}>
          {weeks.map((w) => (
            <option key={w.week} value={w.week}>
              Week {w.week}
              {w.matchups[0]?.isPlayoff ? " (Playoffs)" : ""}
            </option>
          ))}
        </select>
      </label>
      <MatchupViewer matchups={current?.matchups ?? []} teamNames={teamNames} />
    </div>
  );
}
