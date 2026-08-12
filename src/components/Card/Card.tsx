import Link from "next/link";
import styles from "./Card.module.css";

type CardProps = {
  href?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Bigger/bolder title — used for stat-tile style cards (metric strip). */
  emphasis?: boolean;
};

/**
 * Generic flexible card. Used, via different prop combinations, for the
 * homepage's metric strip (eyebrow + emphasized numeric title, no href),
 * explore grid (title + description + href), and recent-seasons list
 * (eyebrow year + champion title + description + href).
 */
export default function Card({ href, eyebrow, title, description, emphasis }: CardProps) {
  const content = (
    <>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <span className={emphasis ? styles.titleEmphasis : styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
    </>
  );

  const className = href ? styles.cardLink : styles.card;

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
