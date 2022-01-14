---
to: "<%= options.indexOf('index') !== -1 ? `src/utils/${name}/index.tsx` : null %>"
---
import <%= name %> from './<%= name %>';

export default <%= name %>;
