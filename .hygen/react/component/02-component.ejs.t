---
to: src/components/<%= Name %>/<%= Name %>.tsx
---
<%
  var hasStyles = options.indexOf("styles") !== -1;
  var hasInterface = options.indexOf("interface") !== -1;
%>
import React from "react";
import type { FC } from "react";
<%if (hasStyles && hasInterface) { %>
import styles from "./<%= Name %>.module.css";
import { <%= Name %>Props } from "./<%= Name %>.props";
<% } else if (hasStyles) { %>
import styles from "./<%= Name %>.module.css";
<% } else if (hasInterface) { %>
import { <%= Name %>Props } from "./<%= Name %>.props";
<% } -%>

const <%= Name %>: FC<%- hasInterface ? `<${Name}Props>` : null %> = (<%- hasInterface ? "props" : null %>) => {
  return (
    <div<%- (hasStyles ? ` className=\{styles.${h.changeCase.camelCase(name)}\}` : null)%>><%= Name %></div>
  );
};

export default <%= Name %>;
