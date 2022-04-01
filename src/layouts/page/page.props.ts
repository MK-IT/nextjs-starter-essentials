import type { ReactNode } from "react";

export default interface PageProps {
  children?: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
}
