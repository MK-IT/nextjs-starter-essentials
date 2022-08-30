---
to: "<%= options.indexOf('component') !== -1 ? `src/components/${h.changeCase.param(name)}/${h.changeCase.param(name)}.tsx` : null %>"
---
<%
  var hasStyles = options.indexOf("styles") !== -1;
  var hasInterface = options.indexOf("interface") !== -1;
%>
<%if (hasStyles && hasInterface) { %>
import styles from "./<%= h.changeCase.param(name) %>.module.scss";
import type <%= h.changeCase.pascal(name) %>Props from "./<%= h.changeCase.param(name) %>.props";
<% } else if (hasStyles) { %>
import styles from "./<%= h.changeCase.param(name) %>.module.scss";
<% } else if (hasInterface) { %>
import type <%= h.changeCase.pascal(name) %>Props from "./<%= h.changeCase.param(name) %>.props";
<% } -%>

function <%= h.changeCase.pascal(name) %>(<%- hasInterface ? "{children, text}:" + `${h.changeCase.pascal(name)}Props` : null %>) {
  return (
    <div<%- (hasStyles ? ` className=\{styles.${h.changeCase.pascal(name)}\}` : null)%>>
      <h1><%= h.changeCase.pascal(name) %></h1>
      <%- hasInterface ? `<p>{text}</p>` : null %>
      <%- hasInterface ? `{children}` : null %>
    </div>
  );
}

export default <%= h.changeCase.pascal(name) %>;
