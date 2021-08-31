---
to: "<%= options.indexOf('index') !== -1 ? `src/components/${Name}/index.tsx` : null %>"
---
export { default } from "./<%= Name %>";
