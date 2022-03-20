---
to: "<%= options.indexOf('index') !== -1 ? `src/hooks/${h.changeCase.paramCase(Name)}/index.tsx` : null %>"
---
import <%= h.changeCase.camel(Name) %> from './<%= h.changeCase.paramCase(Name) %>';

export default <%= h.changeCase.camel(Name) %>;
