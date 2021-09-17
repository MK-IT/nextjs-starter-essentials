---
to: "<%= options.indexOf('styles') !== -1 ? `src/components/${Name}/${Name}.module.css` : null %>"
---
.<%= h.changeCase.pascal(name) %> {
  background: "red";
}
