"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
  { title: "Power Rankings", url: "/rankings" },
  { title: "Matchups", url: "/matchups" },
  { title: "Records", url: "/records" },
  { title: "Teams", url: "/teams" },
  { title: "Seasons", url: "/seasons" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          GDUBFFL
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => {
              const active = pathname === link.url || pathname.startsWith(`${link.url}/`);
              return (
                <li key={link.url}>
                  <Link href={link.url} className={active ? styles.navLinkActive : styles.navLink}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
