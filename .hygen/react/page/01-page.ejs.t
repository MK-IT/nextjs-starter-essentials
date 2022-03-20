---
to: "<%= options.indexOf('page') !== -1 ? `src/pages/${h.changeCase.param(name)}.tsx` : null %>"
---
<%
  var hasStyles = options.indexOf("styles") !== -1;
%>
import type { NextPageWithLayout } from "@pages/_app";
import Page from "@layouts/page";
import Seo from "@layouts/seo";
<%if (hasStyles) { -%>
import styles from "@styles/pages/<%= h.changeCase.param(name) %>.module.scss";
<% } %>

const <%= h.changeCase.pascal(name) %>: NextPageWithLayout = function <%= h.changeCase.pascal(name) %>() {
  return (
    <>
      <Seo
        title="<%= h.changeCase.sentenceCase(name) %>"
        description="Sample SEO description for the `<%= h.changeCase.sentenceCase(name) %>` page"
        keywords="sample, SEO, keywords"
        image={{ url: "/images/default-social-image.png", alt: "Default Social Image" }}
      />

      <div<%- (hasStyles ? ` className=\{styles.${h.changeCase.pascal(name)}\}` : null)%>><pre>/<%= name %></pre> page</div>
    </>
  );
};

<%= h.changeCase.pascal(name) %>.getLayout = (page) => <Page>{page}</Page>;

export default <%= h.changeCase.pascal(name) %>;
