---
to: "<%= options.indexOf('styles') !== -1 ? `src/styles/pages/${h.changeCase.paramCase(name)}.module.scss` : null %>"
---
.<%= h.changeCase.pascal(name) %> {
  background: "red";
}
