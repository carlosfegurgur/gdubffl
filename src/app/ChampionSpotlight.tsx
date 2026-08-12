import Link from "next/link";
import type { ChampionSpotlight as ChampionSpotlightData } from "@/lib/season-archive";
import StatRow from "@/components/StatRow/StatRow";
import styles from "./page.module.css";

export default function ChampionSpotlight({ spotlight }: { spotlight: ChampionSpotlightData }) {
  const { season, champion, championshipGame } = spotlight;

  const margin = championshipGame
    ? Math.round(Math.abs(championshipGame.homeScore - championshipGame.awayScore) * 100) / 100
    : undefined;

  const statItems = [
    { label: "Record", value: `${champion.wins}-${champion.losses}${champion.ties ? `-${champion.ties}` : ""}` },
    { label: "Points For", value: `${champion.pointsFor}` },
    ...(margin !== undefined ? [{ label: "Title Margin", value: `+${margin}` }] : []),
  ];

  return (
    <div className={styles.spotlight}>
      {champion.logoUrl && <img src={champion.logoUrl} alt="" className={styles.spotlightLogo} />}
      <div className={styles.spotlightBody}>
        <p className={styles.eyebrow}>{season} Champion</p>
        <h1 className={styles.spotlightTitle}>{champion.teamName}</h1>
        <p className={styles.spotlightOwner}>{champion.ownerName}</p>
        <StatRow items={statItems} />
        <Link href={`/seasons/${season}`} className={styles.spotlightCta}>
          View {season} Season →
        </Link>
      </div>
    </div>
  );
}
