import { computeTrophyRoom } from "@/lib/awards";
import AwardCard from "./AwardCard";
import styles from "./page.module.css";

export default async function TrophyRoomPage() {
  const awards = await computeTrophyRoom();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Trophy Room</h1>
      <p className={styles.subtitle}>
        Career tallies and reputations earned across every scraped season — separate from the single-game
        bests on the Records page.
      </p>

      <div className={styles.grid}>
        {awards.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </div>
    </main>
  );
}
