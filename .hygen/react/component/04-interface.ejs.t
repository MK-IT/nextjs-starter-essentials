---
to: "<%= options.indexOf('interface') !== -1 ? `src/components/${Name}/${Name}.props.tsx` : null %>"
---
import type { ReactNode } from 'react';

export interface <%= Name %>Props {
  children: ReactNode;
  text: string;
}
