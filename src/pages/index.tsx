import { NextSeo } from "next-seo";

import type { NextPageWithLayout } from "@pages/_app";
import Page from "@layouts/page";
import styles from "@styles/pages/home.module.scss";

const Home: NextPageWithLayout = function Home() {
  return (
    <>
      <NextSeo
        title="Home"
        description="Sample Home page created with NextJS and using the default layout"
      />

      <div className={styles.Home}>
        <div className={styles.Home__Container}>
          <h1 className={styles.Home__Title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.Home__Description}>
            Get started by editing{" "}
            <code className={styles.Home__Code}>pages/index.js</code>
          </p>

          <div className={styles.Home__Grid}>
            <a
              href="https://nextjs.org/docs"
              className={styles.Home__Grid__Card}
            >
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className={styles.Home__Grid__Card}
            >
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.Home__Grid__Card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.Home__Grid__Card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page) => <Page>{page}</Page>;

export default Home;
