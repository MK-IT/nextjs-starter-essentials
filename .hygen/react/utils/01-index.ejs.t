---
to: "<%= options.indexOf('index') !== -1 ? `src/utils/${name}/index.tsx` : null %>"
---
export { default } from "./<%= name %>";
