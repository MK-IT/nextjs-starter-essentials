import React from "react";
import type { AppProps } from "next/app";

import "@styles/globals.css";
import Page from "@layouts/Page";

function App({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default App;
