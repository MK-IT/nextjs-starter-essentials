import React from "react";
import type { FC } from "react";

import SEO from "~layout/SEO";
import Header from "~layout/Header";
import Footer from "~layout/Footer";

import { PageProps } from "./Page.props";

const Page: FC<PageProps> = ({ children, hasHeader, hasFooter }) => (
  <>
    <SEO />

    {hasHeader && <Header />}

    <main>{children}</main>

    {hasFooter && <Footer />}
  </>
);

export default Page;
