---
to: "<%= options.indexOf('utils') !== -1 ? `src/utils/${h.changeCase.paramCase(Name)}/${h.changeCase.paramCase(Name)}.tsx` : null %>"
---
function <%= h.changeCase.camel(name) %>(a: number, b: number) {
  return a + b;
};

export default <%= h.changeCase.camel(name) %>;
