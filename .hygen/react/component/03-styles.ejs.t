---
to: "<%= options.indexOf('styles') !== -1 ? `src/components/${h.changeCase.paramCase(Name)}/${h.changeCase.paramCase(Name)}.module.scss` : null %>"
---
.<%= h.changeCase.pascal(name) %> {
  background: "red";
}
