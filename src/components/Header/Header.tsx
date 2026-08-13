"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { title: "Power Rankings", url: "/rankings" },
  { title: "Matchups", url: "/matchups" },
  { title: "Records", url: "/records" },
  { title: "Trophy Room", url: "/trophy-room" },
  { title: "Teams", url: "/teams" },
  { title: "Seasons", url: "/seasons" },
];

export const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever navigation happens. Adjusting state
  // during render (rather than in an effect) avoids an extra commit.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <img src="/gdubffl-icon.png" alt="" className={styles.logoIcon} />
          GDUBFFL
        </Link>

        <button
          type="button"
          className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
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
