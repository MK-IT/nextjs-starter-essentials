---
to: "<%= options.indexOf('index') !== -1 ? `src/components/${Name}/index.tsx` : null %>"
---
import <%= Name %> from './<%= Name %>';

export default <%= Name %>;
