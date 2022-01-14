import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

import { PageProps } from "./Page.props";

function Page({ children, hasHeader = true, hasFooter = true }: PageProps) {
  return (
    <>
      {hasHeader && <Header />}

      <main>{children}</main>

      {hasFooter && <Footer />}
    </>
  );
}

export default Page;
