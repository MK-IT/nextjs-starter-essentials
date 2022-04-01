---
to: "<%= options.indexOf('utils') !== -1 ? `src/utils/${h.changeCase.param(name)}/${h.changeCase.param(name)}.ts` : null %>"
---
function <%= h.changeCase.camel(name) %>(a: number, b: number) {
  return a + b;
};

export default <%= h.changeCase.camel(name) %>;
