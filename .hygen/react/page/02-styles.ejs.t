---
to: "<%= options.indexOf('styles') !== -1 ? `src/styles/pages/${h.changeCase.pascalCase(name)}.module.scss` : null %>"
---
.<%= h.changeCase.camelCase(name) %> {
  background: "red";
}
