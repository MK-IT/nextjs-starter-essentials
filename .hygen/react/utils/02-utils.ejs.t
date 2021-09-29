---
to: "<%= options.indexOf('utils') !== -1 ? `src/utils/${name}/${name}.tsx` : null %>"
---
function <%= h.changeCase.camelCase(name) %>(a: number, b: number) {
  return a + b;
};

export default <%= h.changeCase.camelCase(name) %>;
