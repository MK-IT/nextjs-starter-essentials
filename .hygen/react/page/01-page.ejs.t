---
to: "<%= options.indexOf('page') !== -1 ? `src/pages/${name}.tsx` : null %>"
---
<%
  var hasStyles = options.indexOf("styles") !== -1;
%>
import React from "react";

import type { NextPageWithLayout } from "@pages/_app";
import Page from "@layouts/Page";
import Seo from "@layouts/Seo";
<%if (hasStyles) { -%>
import styles from "@styles/pages/<%= h.changeCase.pascalCase(name) %>.module.scss";
<% } %>

const <%= h.changeCase.pascalCase(name) %>: NextPageWithLayout = () => {
  return (
    <>
      <Seo
        title="<%= h.changeCase.sentenceCase(name) %>"
        description="Sample SEO description for the `<%= h.changeCase.sentenceCase(name) %>` page"
        keywords="sample, SEO, keywords"
        image={{ url: "/images/default-social-image.png", alt: "Default Social Image" }}
      />

      <div<%- (hasStyles ? ` className=\{styles.${h.changeCase.camelCase(name)}\}` : null)%>><pre>/<%= name %></pre> page</div>
    </>
  );
};

<%= h.changeCase.pascalCase(name) %>.getLayout = (page) => <Page>{page}</Page>;

export default <%= h.changeCase.pascalCase(name) %>;
