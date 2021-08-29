import React from "react";
import type { FC } from "react";

// import SEO from "@layout/SEO";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

import { PageProps } from "./Page.props";

const Page: FC<PageProps> = ({
  children,
  hasHeader = true,
  hasFooter = true,
}) => (
  <>
    {/* <SEO /> */}

    {hasHeader && <Header />}

    <main>{children}</main>

    {hasFooter && <Footer />}
  </>
);

export default Page;
