import styles from "./StatRow.module.css";

export type StatItem = { label: string; value: string };

/** Horizontal strip of label/value pairs, e.g. Record · Points For · Margin. */
export default function StatRow({ items }: { items: StatItem[] }) {
  return (
    <dl className={styles.row}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
