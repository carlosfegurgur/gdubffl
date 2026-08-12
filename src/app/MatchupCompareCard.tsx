import type { ChampionSpotlight } from "@/lib/season-archive";
import styles from "./page.module.css";

export default function MatchupCompareCard({ spotlight }: { spotlight: ChampionSpotlight }) {
  const { champion, runnerUp, championshipGame, season } = spotlight;
  if (!runnerUp || !championshipGame) return null;

  const homeIsChampion = championshipGame.homeOwnerId === champion.ownerId;
  const championScore = homeIsChampion ? championshipGame.homeScore : championshipGame.awayScore;
  const runnerUpScore = homeIsChampion ? championshipGame.awayScore : championshipGame.homeScore;

  return (
    <div className={styles.compareCard}>
      <p className={styles.compareLabel}>{season} Championship</p>
      <div className={styles.compareRow}>
        <CompareSide teamName={champion.teamName} ownerName={champion.ownerName} logoUrl={champion.logoUrl} score={championScore} winner />
        <span className={styles.compareVs}>vs</span>
        <CompareSide teamName={runnerUp.teamName} ownerName={runnerUp.ownerName} logoUrl={runnerUp.logoUrl} score={runnerUpScore} />
      </div>
    </div>
  );
}

function CompareSide({
  teamName,
  ownerName,
  logoUrl,
  score,
  winner,
}: {
  teamName: string;
  ownerName: string;
  logoUrl?: string;
  score: number;
  winner?: boolean;
}) {
  return (
    <div className={`${styles.compareSide} ${winner ? styles.compareWinner : ""}`}>
      {logoUrl && <img src={logoUrl} alt="" className={styles.compareLogo} />}
      <span className={styles.compareName}>{teamName}</span>
      <span className={styles.compareOwner}>{ownerName}</span>
      <span className={styles.compareScore}>{score}</span>
    </div>
  );
}
