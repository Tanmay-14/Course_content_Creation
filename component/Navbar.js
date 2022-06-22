import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">SkyCrew</Link>
      </div>
      <div className={styles.links}>
        <Link href="/create_course">
          <h3>Create Course</h3>
        </Link>

        <button className={styles.btn}>
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
