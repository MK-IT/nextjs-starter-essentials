/* eslint-disable react/jsx-props-no-spreading */
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

import defaultSEOProps from "@root/next-seo.config";
import "@styles/globals.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo {...defaultSEOProps} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export type { NextPageWithLayout };

export default App;
