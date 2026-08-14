"use client";

import { useEffect, useMemo, useState } from "react";
import type { Owner, Week } from "@/lib/data-loader.server";
import type { HeadToHeadSummary, SeasonMatchup } from "@/lib/matchup-utils";
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

  // A few owners across this league's history share a display name (e.g. multiple
  // "JR"s) — disambiguate those with their team name so labels stay unambiguous.
  const ownerLabel = useMemo(() => {
    const nameCounts = new Map<string, number>();
    owners.forEach((o) => nameCounts.set(o.name, (nameCounts.get(o.name) ?? 0) + 1));
    return new Map(
      owners.map((o) => [o.id, (nameCounts.get(o.name) ?? 0) > 1 ? `${o.name} (${o.teamName})` : o.name])
    );
  }, [owners]);

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

          <label className={`${styles.field} ${styles.weekFieldMobile}`}>
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

          <div className={`${styles.field} ${styles.weekFieldDesktop}`}>
            <span>Week</span>
            <div className={styles.weekButtons} role="group" aria-label="Select week">
              {(seasonData?.weeks ?? []).map((w) => (
                <button
                  key={w.week}
                  type="button"
                  className={week === w.week ? styles.weekButtonActive : styles.weekButton}
                  onClick={() => setWeek(w.week)}
                  aria-current={week === w.week}
                  title={w.matchups[0]?.isPlayoff ? `Week ${w.week} (Playoffs)` : `Week ${w.week}`}
                >
                  {w.week}
                  {w.matchups[0]?.isPlayoff && <span className={styles.weekButtonPlayoff}>•</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading && <p className={styles.loading}>Loading…</p>}
        {!loading && seasonData && (
          <MatchupViewer matchups={currentWeek?.matchups ?? []} teamNames={seasonData.teamNames} />
        )}
      </section>

      <HeadToHead owners={owners} ownerLabel={ownerLabel} />
    </>
  );
}

function HeadToHead({ owners, ownerLabel }: { owners: Owner[]; ownerLabel: Map<string, string> }) {
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
    fetch(`/api/matchups?teamA=${teamA}&teamB=${teamB}`)
      .then((res) => res.json())
      .then((data) => setSummary(data.summary))
      .catch(() => setError("Failed to load head-to-head."))
      .finally(() => setLoading(false));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Head-to-Head (All-Time)</h2>
      <div className={styles.controls}>
        <label className={styles.field}>
          Owner A
          <select value={teamA} onChange={(e) => setTeamA(e.target.value)}>
            {owners.map((o) => (
              <option key={o.id} value={o.id}>
                {ownerLabel.get(o.id) ?? o.name}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          Owner B
          <select value={teamB} onChange={(e) => setTeamB(e.target.value)}>
            {owners.map((o) => (
              <option key={o.id} value={o.id}>
                {ownerLabel.get(o.id) ?? o.name}
              </option>
            ))}
          </select>
        </label>

        <button className={styles.button} onClick={compare} disabled={!canCompare || loading}>
          {loading ? "Loading…" : "Compare"}
        </button>
      </div>

      {!canCompare && <p className={styles.hint}>Pick two different owners.</p>}
      {error && <p className={styles.hint}>{error}</p>}

      {summary && (
        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <strong>{summary.winsA}</strong> - <strong>{summary.winsB}</strong>
            {summary.ties > 0 && <span> ({summary.ties} ties)</span>}
            <span className={styles.summaryLabel}>
              {ownerLabel.get(teamA) ?? teamA} vs {ownerLabel.get(teamB) ?? teamB} · {summary.totalMatches}{" "}
              all-time matchups
            </span>
          </div>

          <ul className={styles.summaryStats}>
            <li>Avg margin: {Math.abs(summary.avgMargin)}</li>
            {summary.biggestWin?.matchup && (
              <li>
                Biggest win: {ownerLabel.get(summary.biggestWin.owner) ?? summary.biggestWin.owner} by{" "}
                {summary.biggestWin.margin} ({summary.biggestWin.matchup.season} Week {summary.biggestWin.matchup.week},{" "}
                {summary.biggestWin.matchup.homeScore}
                {"-"}
                {summary.biggestWin.matchup.awayScore})
              </li>
            )}
            {summary.closestWin?.matchup && (
              <li>
                Closest game: {ownerLabel.get(summary.closestWin.owner) ?? summary.closestWin.owner} by{" "}
                {summary.closestWin.margin} ({summary.closestWin.matchup.season} Week {summary.closestWin.matchup.week},{" "}
                {summary.closestWin.matchup.homeScore}
                {"-"}
                {summary.closestWin.matchup.awayScore})
              </li>
            )}
          </ul>

          <MatchupHistory matchups={summary.matchups} ownerLabel={ownerLabel} />
        </div>
      )}
    </section>
  );
}

function MatchupHistory({ matchups, ownerLabel }: { matchups: SeasonMatchup[]; ownerLabel: Map<string, string> }) {
  const [expanded, setExpanded] = useState(false);

  if (matchups.length === 0) return null;
  return (
    <div className={styles.historyWrap}>
      <ol className={expanded ? styles.historyExpanded : styles.history}>
        {matchups.map((m) => (
          <li key={m.id}>
            {m.season} Week {m.week}: {ownerLabel.get(m.homeOwnerId) ?? m.homeOwnerId} {m.homeScore} — {m.awayScore}{" "}
            {ownerLabel.get(m.awayOwnerId) ?? m.awayOwnerId}
          </li>
        ))}
      </ol>
      <button type="button" className={styles.expandButton} onClick={() => setExpanded((e) => !e)}>
        {expanded ? "Show less" : `Show all ${matchups.length} matchups`}
      </button>
    </div>
  );
}
