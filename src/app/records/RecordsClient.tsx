"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import type { Owner } from "@/lib/data-loader.server";
import type { AllTimeRecords, GamePerformance } from "@/lib/records";
import { useSortableTable } from "@/lib/useSortableTable";
import SortableHeader from "@/components/SortableHeader";
import styles from "./page.module.css";

type ScopeResponse = {
  season: number | "all-time";
  ownerId: string;
  records: AllTimeRecords;
  leaderboard: GamePerformance[];
};

const leaderboardColumns: { key: keyof GamePerformance; label: string }[] = [
  { key: "season", label: "Season" },
  { key: "week", label: "Week" },
  { key: "ownerName", label: "Owner" },
  { key: "points", label: "Points" },
  { key: "opponentName", label: "Opponent" },
  { key: "opponentPoints", label: "Opp Points" },
  { key: "margin", label: "Margin" },
  { key: "result", label: "Result" },
];

export default function RecordsClient({
  seasons,
  owners,
  initialRecords,
  initialLeaderboard,
}: {
  seasons: number[];
  owners: Owner[];
  initialRecords: AllTimeRecords;
  initialLeaderboard: GamePerformance[];
}) {
  const [scope, setScope] = useState<number | "all-time">("all-time");
  const [ownerFilter, setOwnerFilter] = useState<string>("all-owners");
  const [data, setData] = useState<ScopeResponse>({
    season: "all-time",
    ownerId: "all-owners",
    records: initialRecords,
    leaderboard: initialLeaderboard,
  });
  const [loading, setLoading] = useState(false);

  const { sorted, sortKey, direction, toggleSort } = useSortableTable<GamePerformance, keyof GamePerformance>(
    data.leaderboard,
    "points"
  );

  const fetchScope = (nextScope: number | "all-time", nextOwnerId: string) => {
    setLoading(true);
    const params = new URLSearchParams();
    if (nextScope !== "all-time") params.set("season", String(nextScope));
    if (nextOwnerId !== "all-owners") params.set("ownerId", nextOwnerId);
    const query = params.toString();
    fetch(`/api/records${query ? `?${query}` : ""}`)
      .then((res) => res.json())
      .then((json: ScopeResponse) => setData(json))
      .finally(() => setLoading(false));
  };

  const onScopeChange = (value: string) => {
    const nextScope = value === "all-time" ? "all-time" : Number(value);
    setScope(nextScope);
    fetchScope(nextScope, ownerFilter);
  };

  const onOwnerChange = (value: string) => {
    setOwnerFilter(value);
    fetchScope(scope, value);
  };

  const { records } = data;

  return (
    <>
      <div className={styles.controls}>
        <label className={styles.field}>
          Scope
          <select value={scope} onChange={(e) => onScopeChange(e.target.value)}>
            <option value="all-time">All-Time</option>
            {seasons.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          Owner
          <select value={ownerFilter} onChange={(e) => onOwnerChange(e.target.value)}>
            <option value="all-owners">All Owners</option>
            {owners.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <section className={styles.cards}>
        <RecordCard label="Highest Score" empty={!records.highestScore}>
          {records.highestScore && (
            <>
              <span className={styles.cardValue}>{records.highestScore.points}</span>
              <span className={styles.cardDetail}>
                <OwnerLink id={records.highestScore.ownerId} name={records.highestScore.ownerName} /> · {records.highestScore.season}{" "}
                Wk {records.highestScore.week} vs {records.highestScore.opponentName}
                {records.highestScore.isPlayoff && " (Playoffs)"}
              </span>
            </>
          )}
        </RecordCard>

        <RecordCard label="Biggest Blowout" empty={!records.biggestBlowout}>
          {records.biggestBlowout && (
            <>
              <span className={styles.cardValue}>+{records.biggestBlowout.margin}</span>
              <span className={styles.cardDetail}>
                <OwnerLink id={records.biggestBlowout.ownerId} name={records.biggestBlowout.ownerName} /> {records.biggestBlowout.points}
                {" – "}
                {records.biggestBlowout.opponentPoints} {records.biggestBlowout.opponentName} · {records.biggestBlowout.season} Wk{" "}
                {records.biggestBlowout.week}
                {records.biggestBlowout.isPlayoff && " (Playoffs)"}
              </span>
            </>
          )}
        </RecordCard>

        <RecordCard label="Closest Game" empty={!records.closestGame}>
          {records.closestGame && (
            <>
              <span className={styles.cardValue}>{records.closestGame.margin}</span>
              <span className={styles.cardDetail}>
                <OwnerLink id={records.closestGame.ownerId} name={records.closestGame.ownerName} /> edged {records.closestGame.opponentName}{" "}
                {records.closestGame.points}
                {"–"}
                {records.closestGame.opponentPoints} · {records.closestGame.season} Wk {records.closestGame.week}
                {records.closestGame.isPlayoff && " (Playoffs)"}
              </span>
            </>
          )}
        </RecordCard>

        <RecordCard label="Longest Win Streak" empty={!records.longestWinStreak}>
          {records.longestWinStreak && (
            <>
              <span className={styles.cardValue}>{records.longestWinStreak.length}</span>
              <span className={styles.cardDetail}>
                <OwnerLink id={records.longestWinStreak.ownerId} name={records.longestWinStreak.ownerName} /> · {records.longestWinStreak.startSeason}{" "}
                Wk {records.longestWinStreak.startWeek} – {records.longestWinStreak.endSeason} Wk {records.longestWinStreak.endWeek}
              </span>
            </>
          )}
        </RecordCard>

        <RecordCard label="Longest Losing Streak" empty={!records.longestLossStreak}>
          {records.longestLossStreak && (
            <>
              <span className={styles.cardValue}>{records.longestLossStreak.length}</span>
              <span className={styles.cardDetail}>
                <OwnerLink id={records.longestLossStreak.ownerId} name={records.longestLossStreak.ownerName} /> ·{" "}
                {records.longestLossStreak.startSeason} Wk {records.longestLossStreak.startWeek} – {records.longestLossStreak.endSeason} Wk{" "}
                {records.longestLossStreak.endWeek}
              </span>
            </>
          )}
        </RecordCard>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Leaderboard
          <span className={styles.loadingTag}>{loading ? "Loading…" : `${sorted.length} games`}</span>
        </h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {leaderboardColumns.map((col) => (
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
              {sorted.map((row, i) => (
                <tr key={`${row.season}-${row.week}-${row.ownerId}-${i}`}>
                  <td>{row.season}</td>
                  <td>{row.week}</td>
                  <td>
                    <OwnerLink id={row.ownerId} name={row.ownerName} />
                  </td>
                  <td className={styles.emphasis}>{row.points}</td>
                  <td>
                    <OwnerLink id={row.opponentId} name={row.opponentName} />
                  </td>
                  <td>{row.opponentPoints}</td>
                  <td className={row.margin > 0 ? styles.win : row.margin < 0 ? styles.loss : undefined}>
                    {row.margin > 0 ? `+${row.margin}` : row.margin}
                  </td>
                  <td>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function OwnerLink({ id, name }: { id: string; name: string }) {
  return (
    <Link href={`/teams/${id}`} className={styles.ownerLink}>
      {name}
    </Link>
  );
}

function RecordCard({ label, empty, children }: { label: string; empty: boolean; children: ReactNode }) {
  return (
    <div className={styles.card}>
      <span className={styles.cardLabel}>{label}</span>
      {empty ? <span className={styles.cardDetail}>No data</span> : children}
    </div>
  );
}
