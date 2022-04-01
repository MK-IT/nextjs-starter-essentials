---
to: "<%= options.indexOf('interface') !== -1 ? `src/components/${h.changeCase.param(name)}/${h.changeCase.param(name)}.props.ts` : null %>"
---
import type { ReactNode } from 'react';

export default interface <%= h.changeCase.pascal(name) %>Props {
  children: ReactNode;
  text: string;
}
