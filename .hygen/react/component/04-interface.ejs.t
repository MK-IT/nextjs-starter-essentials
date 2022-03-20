---
to: "<%= options.indexOf('interface') !== -1 ? `src/components/${h.changeCase.paramCase(Name)}/${h.changeCase.paramCase(Name)}.props.tsx` : null %>"
---
import type { ReactNode } from 'react';

export interface <%= h.changeCase.pascal(name) %>Props {
  children: ReactNode;
  text: string;
}
