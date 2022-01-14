---
to: "<%= options.indexOf('component') !== -1 ? `src/components/${Name}/${Name}.tsx` : null %>"
---
<%
  var hasStyles = options.indexOf("styles") !== -1;
  var hasInterface = options.indexOf("interface") !== -1;
%>
<%if (hasStyles && hasInterface) { %>
import styles from "./<%= Name %>.module.scss";
import { <%= Name %>Props } from "./<%= Name %>.props";
<% } else if (hasStyles) { %>
import styles from "./<%= Name %>.module.scss";
<% } else if (hasInterface) { %>
import { <%= Name %>Props } from "./<%= Name %>.props";
<% } -%>

function <%= Name %>(<%- hasInterface ? "{children, text}:" + `${Name}Props` : null %>) {
  return (
    <div<%- (hasStyles ? ` className=\{styles.${h.changeCase.camelCase(name)}\}` : null)%>>
      <h1><%= Name %></h1>
      <%- hasInterface ? `<p>{text}</p>` : null %>
      <%- hasInterface ? `{children}` : null %>
    </div>
  );
}

export default <%= Name %>;
