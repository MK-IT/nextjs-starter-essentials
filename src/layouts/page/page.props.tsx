import type { ReactNode } from "react";

export interface PageProps {
  children?: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
}
