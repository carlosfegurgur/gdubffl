import styles from "./Navbar.module.css";

const navbarLinks = [
  { title: "Dashboard", url: "/" },
  { title: "Power Rankings", url: "/rankings" },
  { title: "Matchups", url: "/matchups" },
  { title: "Teams", url: "/teams" },
  { title: "Playoffs", url: "/playoffs" },
  { title: "History", url: "/history" },
];

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navbarLinks}>
        {navbarLinks.map((link, i) => (
          <li key={i}>
            <a href={link.url} className={styles.navbarLink}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
