import { ReactNode } from "react";

export interface TooltipLinkProps {
  href: string;
  ariaLabel: string;
  tooltipText: string;
  icon?: ReactNode; // Permet de passer n'importe quelle icône React
}
