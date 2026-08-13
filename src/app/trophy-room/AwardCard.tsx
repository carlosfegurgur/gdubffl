import Link from "next/link";
import type { Award } from "@/lib/awards";
import { ordinal } from "@/lib/format";
import styles from "./page.module.css";

export default function AwardCard({ award }: { award: Award }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{award.title}</h2>
        <p className={styles.cardBlurb}>{award.blurb}</p>
      </div>

      {award.leaders.length === 0 ? (
        <p className={styles.empty}>Not enough data yet.</p>
      ) : (
        <ol className={styles.leaderList}>
          {award.leaders.map((leader) => (
            <li
              key={leader.ownerId}
              className={leader.rank === 1 ? `${styles.leaderRow} ${styles.leaderRowFirst}` : styles.leaderRow}
            >
              <span className={styles.leaderRank}>{ordinal(leader.rank)}</span>
              <Link href={`/teams/${leader.ownerId}`} className={styles.leaderTeam}>
                {leader.logoUrl && <img src={leader.logoUrl} alt="" className={styles.leaderLogo} />}
                <span className={styles.leaderNames}>
                  <span className={styles.leaderTeamName}>{leader.teamName}</span>
                  <span className={styles.leaderOwnerName}>{leader.ownerName}</span>
                </span>
              </Link>
              <span className={styles.leaderValue}>
                {leader.value.toLocaleString()}{" "}
                <span className={styles.leaderUnit}>{leader.value === 1 ? award.unitSingular : award.unit}</span>
              </span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
