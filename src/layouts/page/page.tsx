import Footer from "@layouts/footer";
import Header from "@layouts/header";

import PageProps from "./page.props";

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
