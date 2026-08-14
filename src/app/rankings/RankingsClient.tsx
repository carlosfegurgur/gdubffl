"use client";

import { useState } from "react";
import type { PowerRanking } from "@/lib/power-rankings";
import PowerRankingsTable from "@/components/PowerRankingsTable";
import styles from "./page.module.css";

export default function RankingsClient({
  seasons,
  initialSeason,
  initialRankings,
}: {
  seasons: number[];
  initialSeason?: number;
  initialRankings: PowerRanking[];
}) {
  const [season, setSeason] = useState(initialSeason);
  const [rankings, setRankings] = useState(initialRankings);
  const [loading, setLoading] = useState(false);

  const onSeasonChange = (value: string) => {
    const next = Number(value);
    setSeason(next);
    setLoading(true);
    fetch(`/api/power-rankings?season=${next}`)
      .then((res) => res.json())
      .then((json: { rankings: PowerRanking[] }) => setRankings(json.rankings))
      .finally(() => setLoading(false));
  };

  if (seasons.length === 0) {
    return <p className={styles.subtitle}>No seasons available yet.</p>;
  }

  return (
    <>
      <div className={styles.controls}>
        <label className={styles.field}>
          Season
          <select value={season} onChange={(e) => onSeasonChange(e.target.value)}>
            {seasons.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        {loading && <span className={styles.loadingTag}>Loading…</span>}
      </div>

      <PowerRankingsTable rows={rankings} />

      <p className={styles.formula}>
        <strong>Raw OPR</strong> = (avg score × 6 + (high score + low score) × 2 + (win% × 200) × 2) ÷ 10.{" "}
        <strong>Adjusted OPR</strong> = raw OPR ÷ that season&apos;s league-average raw OPR, so 1.000 is exactly
        average and every ~0.045 above or below roughly tracks a win or loss over a season — this makes teams
        comparable across seasons with different scoring environments. Formula from the{" "}
        <a href="https://www.okiraqi.org/opr" target="_blank" rel="noreferrer">
          Oberon Mt./OIL Power Rating
        </a>
        .
      </p>
    </>
  );
}
