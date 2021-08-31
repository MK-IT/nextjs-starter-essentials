---
to: "<%= options.indexOf('index') !== -1 ? `src/hooks/${name}/index.tsx` : null %>"
---
export { default } from "./<%= name %>";
