---
to: "<%= options.indexOf('hook') !== -1 ? `src/hooks/${name}/${name}.tsx` : null %>"
---
import { useState } from "react";

const <%= h.changeCase.camelCase(name) %> = () => {
  const [isLoading, setIsLoading] = useState(false);
  return [isLoading, setIsLoading] as const;
};

export default <%= h.changeCase.camelCase(name) %>;
