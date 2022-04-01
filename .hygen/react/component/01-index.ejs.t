---
to: "<%= options.indexOf('index') !== -1 ? `src/components/${h.changeCase.param(name)}/index.ts` : null %>"
---
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.param(name) %>';

export default <%= h.changeCase.pascal(name) %>;
