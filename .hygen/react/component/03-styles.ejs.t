---
to: "<%= options.indexOf('styles') !== -1 ? `src/components/${h.changeCase.param(name)}/${h.changeCase.param(name)}.module.scss` : null %>"
---
.<%= h.changeCase.pascal(name) %> {
  background: "red";
}
