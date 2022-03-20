import Link from "next/link";

import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Container}>
        <h2 className={styles.Header__Title}>
          <Link href="/" passHref>
            <a href="replace">NextJS Starter Essentials</a>
          </Link>
        </h2>
      </div>
    </header>
  );
}

export default Header;
