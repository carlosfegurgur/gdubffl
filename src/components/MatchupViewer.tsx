import type { Matchup } from "@/lib/data-loader.server";
import styles from "./MatchupViewer.module.css";

type Props = {
  matchups: Matchup[];
  teamNames: Record<string, string>;
};

export default function MatchupViewer({ matchups, teamNames }: Props) {
  if (matchups.length === 0) {
    return <p className={styles.empty}>No matchups for this week.</p>;
  }

  return (
    <ul className={styles.list}>
      {matchups.map((m) => {
        const homeWins = m.homeScore > m.awayScore;
        const awayWins = m.awayScore > m.homeScore;
        const homeName = teamNames[m.homeOwnerId] ?? m.homeOwnerName ?? m.homeOwnerId;
        const awayName = teamNames[m.awayOwnerId] ?? m.awayOwnerName ?? m.awayOwnerId;

        return (
          <li key={m.id} className={styles.item}>
            <div className={`${styles.side} ${homeWins ? styles.winner : ""}`}>
              <span className={styles.name}>
                {homeName}
                {m.homeOwnerName && m.homeOwnerName !== homeName && (
                  <span className={styles.ownerName}> ({m.homeOwnerName})</span>
                )}
              </span>
              <span className={styles.score}>{m.homeScore}</span>
            </div>
            <span className={styles.vs}>vs</span>
            <div className={`${styles.side} ${awayWins ? styles.winner : ""}`}>
              <span className={styles.name}>
                {awayName}
                {m.awayOwnerName && m.awayOwnerName !== awayName && (
                  <span className={styles.ownerName}> ({m.awayOwnerName})</span>
                )}
              </span>
              <span className={styles.score}>{m.awayScore}</span>
            </div>
            {m.isPlayoff && <span className={styles.playoffTag}>Playoffs</span>}
          </li>
        );
      })}
    </ul>
  );
}
