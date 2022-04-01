---
to: "<%= options.indexOf('hook') !== -1 ? `src/hooks/${h.changeCase.param(name)}/${h.changeCase.param(name)}.ts` : null %>"
---
import { useState } from "react";

const <%= h.changeCase.camel(name) %> = () => {
  const [isLoading, setIsLoading] = useState(false);
  return [isLoading, setIsLoading] as const;
};

export default <%= h.changeCase.camel(name) %>;
