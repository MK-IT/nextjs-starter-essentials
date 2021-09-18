import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import styles from "@styles/pages/NotFound.module.scss";

const NotFound: NextPage = () => (
  <>
    <NextSeo title="Page Not Found" />
    <div className={styles.NotFound}>
      <div className={styles.NotFound__Body}>
        <h1 className={styles.NotFound__Title}>404</h1>
        <h2>This page could not be found</h2>
        <Link href="/" passHref>
          <a className={styles.NotFound__Link} href="replace">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
