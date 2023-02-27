import type { NextPageWithLayout } from "@pages/_app";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Page from "@layouts/page";
import styles from "@styles/pages/not-found.module.scss";

const NotFound: NextPageWithLayout = function NotFound() {
  return (
    <>
      <NextSeo
        title="Page Not Found"
        description="[404] Page Not Found Error"
      />

      <div className={styles.NotFound}>
        <div className={styles.NotFound__Body}>
          <h1 className={styles.NotFound__Title}>404</h1>
          <h2>This page could not be found</h2>
          <Link href="/" className={styles.NotFound__Link}>
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

NotFound.getLayout = (page) => <Page>{page}</Page>;

export default NotFound;
