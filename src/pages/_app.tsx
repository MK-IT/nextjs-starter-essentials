/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import defaultSEOProps from "@root/next-seo.config";
import "@styles/globals.css";
import Page from "@layouts/Page";

function App({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <DefaultSeo {...defaultSEOProps} />
      <Component {...pageProps} />
    </Page>
  );
}

export default App;
