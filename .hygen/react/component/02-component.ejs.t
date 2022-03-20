---
to: "<%= options.indexOf('component') !== -1 ? `src/components/${h.changeCase.paramCase(Name)}/${h.changeCase.paramCase(Name)}.tsx` : null %>"
---
<%
  var hasStyles = options.indexOf("styles") !== -1;
  var hasInterface = options.indexOf("interface") !== -1;
%>
<%if (hasStyles && hasInterface) { %>
import styles from "./<%= h.changeCase.paramCase(Name) %>.module.scss";
import { <%= h.changeCase.pascal(Name) %>Props } from "./<%= h.changeCase.paramCase(Name) %>.props";
<% } else if (hasStyles) { %>
import styles from "./<%= h.changeCase.paramCase(Name) %>.module.scss";
<% } else if (hasInterface) { %>
import { <%= h.changeCase.pascal(Name) %>Props } from "./<%= h.changeCase.paramCase(Name) %>.props";
<% } -%>

function <%= h.changeCase.pascal(Name) %>(<%- hasInterface ? "{children, text}:" + `${h.changeCase.pascal(Name)}Props` : null %>) {
  return (
    <div<%- (hasStyles ? ` className=\{styles.${h.changeCase.pascal(Name)}\}` : null)%>>
      <h1><%= h.changeCase.pascal(Name) %></h1>
      <%- hasInterface ? `<p>{text}</p>` : null %>
      <%- hasInterface ? `{children}` : null %>
    </div>
  );
}

export default <%= h.changeCase.pascal(Name) %>;
