import React from "react";
import type { FC } from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__container__title}>
          <Link href="/">
            <a className={styles.header__container__title__link}>
              NextJS Starter Essentials
            </a>
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
