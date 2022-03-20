---
to: "<%= options.indexOf('hook') !== -1 ? `src/hooks/${h.changeCase.paramCase(Name)}/${h.changeCase.paramCase(Name)}.tsx` : null %>"
---
import { useState } from "react";

const <%= h.changeCase.camel(name) %> = () => {
  const [isLoading, setIsLoading] = useState(false);
  return [isLoading, setIsLoading] as const;
};

export default <%= h.changeCase.camel(name) %>;
