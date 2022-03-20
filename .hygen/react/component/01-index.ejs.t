---
to: "<%= options.indexOf('index') !== -1 ? `src/components/${h.changeCase.paramCase(Name)}/index.tsx` : null %>"
---
import <%= h.changeCase.pascal(Name) %> from './<%= h.changeCase.paramCase(Name) %>';

export default <%= h.changeCase.pascal(Name) %>;
