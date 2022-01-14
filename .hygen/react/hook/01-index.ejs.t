---
to: "<%= options.indexOf('index') !== -1 ? `src/hooks/${name}/index.tsx` : null %>"
---
import <%= name %> from './<%= name %>';

export default <%= name %>;
