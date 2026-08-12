"use client";

import { useEffect, useMemo, useState } from "react";
import type { Owner, Week, Matchup } from "@/lib/data-loader.server";
import type { HeadToHeadSummary } from "@/lib/matchup-utils";
import MatchupViewer from "@/components/MatchupViewer";
import styles from "./page.module.css";

type SeasonResponse = { season: number; weeks: Week[]; teamNames: Record<string, string> };

export default function MatchupsClient({ owners, seasons }: { owners: Owner[]; seasons: number[] }) {
  const [season, setSeason] = useState<number>(seasons[0]);
  const [seasonData, setSeasonData] = useState<SeasonResponse | null>(null);
  const [week, setWeek] = useState<number>(1);
  const loading = !seasonData || seasonData.season !== season;

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/seasons/${season}`)
      .then((res) => res.json())
      .then((data: SeasonResponse) => {
        if (cancelled) return;
        setSeasonData(data);
        setWeek(data.weeks[0]?.week ?? 1);
      });
    return () => {
      cancelled = true;
    };
  }, [season]);

  const currentWeek = seasonData?.weeks.find((w) => w.week === week);
  const ownerName = useMemo(() => new Map(owners.map((o) => [o.id, o.name])), [owners]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.controls}>
          <label className={styles.field}>
            Season
            <select value={season} onChange={(e) => setSeason(Number(e.target.value))}>
              {seasons.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            Week
            <select value={week} onChange={(e) => setWeek(Number(e.target.value))} disabled={!seasonData}>
              {(seasonData?.weeks ?? []).map((w) => (
                <option key={w.week} value={w.week}>
                  Week {w.week}
                  {w.matchups[0]?.isPlayoff ? " (Playoffs)" : ""}
                </option>
              ))}
            </select>
          </label>
        </div>

        {loading && <p className={styles.loading}>Loading…</p>}
        {!loading && seasonData && (
          <MatchupViewer matchups={currentWeek?.matchups ?? []} teamNames={seasonData.teamNames} />
        )}
      </section>

      <HeadToHead owners={owners} seasons={seasons} defaultSeason={season} ownerName={ownerName} />
    </>
  );
}

function HeadToHead({
  owners,
  seasons,
  defaultSeason,
  ownerName,
}: {
  owners: Owner[];
  seasons: number[];
  defaultSeason: number;
  ownerName: Map<string, string>;
}) {
  const [season, setSeason] = useState(defaultSeason);
  const [teamA, setTeamA] = useState(owners[0]?.id ?? "");
  const [teamB, setTeamB] = useState(owners[1]?.id ?? "");
  const [summary, setSummary] = useState<HeadToHeadSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canCompare = teamA && teamB && teamA !== teamB;

  const compare = () => {
    if (!canCompare) return;
    setLoading(true);
    setError(null);
    fetch(`/api/matchups?season=${season}&teamA=${teamA}&teamB=${teamB}`)
      .then((res) => res.json())
      .then((data) => setSummary(data.summary))
      .catch(() => setError("Failed to load head-to-head."))
      .finally(() => setLoading(false));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Head-to-Head</h2>
      <div className={styles.controls}>
        <label className={styles.field}>
          Season
          <select value={season} onChange={(e) => setSeason(Number(e.target.value))}>
            {seasons.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          Team A
          <select value={teamA} onChange={(e) => setTeamA(e.target.value)}>
            {owners.map((o) => (
              <option key={o.id} value={o.id}>
                {o.teamName}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          Team B
          <select value={teamB} onChange={(e) => setTeamB(e.target.value)}>
            {owners.map((o) => (
              <option key={o.id} value={o.id}>
                {o.teamName}
              </option>
            ))}
          </select>
        </label>

        <button className={styles.button} onClick={compare} disabled={!canCompare || loading}>
          {loading ? "Loading…" : "Compare"}
        </button>
      </div>

      {!canCompare && <p className={styles.hint}>Pick two different teams.</p>}
      {error && <p className={styles.hint}>{error}</p>}

      {summary && (
        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <strong>{summary.winsA}</strong> - <strong>{summary.winsB}</strong>
            {summary.ties > 0 && <span> ({summary.ties} ties)</span>}
            <span className={styles.summaryLabel}>
              {ownerName.get(teamA) ?? teamA} vs {ownerName.get(teamB) ?? teamB} · {summary.totalMatches}{" "}
              all-time matchups
            </span>
          </div>

          <ul className={styles.summaryStats}>
            <li>Avg margin: {Math.abs(summary.avgMargin)}</li>
            {summary.biggestWin?.matchup && (
              <li>
                Biggest win: {ownerName.get(summary.biggestWin.owner) ?? summary.biggestWin.owner} by{" "}
                {summary.biggestWin.margin} (Week {summary.biggestWin.matchup.week}, {summary.biggestWin.matchup.homeScore}
                {"-"}
                {summary.biggestWin.matchup.awayScore})
              </li>
            )}
            {summary.closestWin?.matchup && (
              <li>
                Closest game: {ownerName.get(summary.closestWin.owner) ?? summary.closestWin.owner} by{" "}
                {summary.closestWin.margin} (Week {summary.closestWin.matchup.week}, {summary.closestWin.matchup.homeScore}
                {"-"}
                {summary.closestWin.matchup.awayScore})
              </li>
            )}
          </ul>

          <MatchupHistory matchups={summary.matchups} ownerName={ownerName} />
        </div>
      )}
    </section>
  );
}

function MatchupHistory({ matchups, ownerName }: { matchups: Matchup[]; ownerName: Map<string, string> }) {
  if (matchups.length === 0) return null;
  return (
    <ol className={styles.history}>
      {matchups.map((m) => (
        <li key={m.id}>
          Week {m.week}: {ownerName.get(m.homeOwnerId) ?? m.homeOwnerId} {m.homeScore} — {m.awayScore}{" "}
          {ownerName.get(m.awayOwnerId) ?? m.awayOwnerId}
        </li>
      ))}
    </ol>
  );
}
