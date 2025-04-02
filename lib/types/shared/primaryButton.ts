// export interface PrimaryButtonProps {
//   children: React.ReactNode;
//   href?: string;
//   target?: "_blank" | "_self" | "_parent" | "_top";
//   rel?: string;
//   className?: string;
//   isLoading?: boolean;
//   disabled?: boolean;
//   onClick?: () => void;
//   textColor?: string;
//   bgColor?: string;
//   borderColor?: string;
//   gap?: string;
//   px?: string;
//   py?: string;
//   fontFamily?: string;
//   fontSize?: string;
//   fontWeight?: string;
//   shadow?: string;
//   rounded?: string;
// }

import { ParsedUrlQueryInput } from "querystring";


export interface PrimaryButtonProps {
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primaryPortfolio" | "secondaryPortfolio" | "primaryAdmin" | "secondaryAdmin";
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string | { pathname: string; query?: ParsedUrlQueryInput };
  target?: string; // Ajout de 'target' pour gérer l'ouverture des liens externes
  rel?: string; // Ajout de 'rel' pour la sécurité des liens externes
}