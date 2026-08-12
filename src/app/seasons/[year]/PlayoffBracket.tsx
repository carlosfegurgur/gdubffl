import type { PlayoffRound } from "@/lib/season-archive";
import styles from "./page.module.css";

export default function PlayoffBracket({ rounds }: { rounds: PlayoffRound[] }) {
  if (rounds.length === 0) {
    return <p className={styles.empty}>No playoff data for this season.</p>;
  }

  return (
    <div className={styles.bracket}>
      {rounds.map((round) => (
        <div key={round.week} className={styles.round}>
          <h3 className={styles.roundTitle}>
            {round.roundName} <span className={styles.roundWeek}>Week {round.week}</span>
          </h3>
          <div className={styles.roundMatchups}>
            {round.matchups.map((m) => {
              const homeWins = m.homeScore > m.awayScore;
              const awayWins = m.awayScore > m.homeScore;
              return (
                <div key={m.id} className={styles.bracketCard}>
                  {m.label && <span className={styles.bracketLabel}>{m.label}</span>}
                  <div className={`${styles.bracketSide} ${homeWins ? styles.bracketWinner : ""}`}>
                    <span className={styles.bracketName}>{m.homeTeamName}</span>
                    <span className={styles.bracketScore}>{m.homeScore}</span>
                  </div>
                  <div className={`${styles.bracketSide} ${awayWins ? styles.bracketWinner : ""}`}>
                    <span className={styles.bracketName}>{m.awayTeamName}</span>
                    <span className={styles.bracketScore}>{m.awayScore}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
