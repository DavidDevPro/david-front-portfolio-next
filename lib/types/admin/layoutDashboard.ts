export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarNavProps {
  items: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
}

export interface NavBarLink {
  title: string; // Titre affiché dans la navigation
  href: string; // Chemin de la route
  icon: React.ReactNode; // Icône associée au lien
}

// Définir l'interface pour un lien de navigation
export interface NavLink {
  title: string;
  label?: string;
  href?: string;
  icon: React.ReactNode;
  onClick?: () => void; // Ajout d'une propriété pour gérer les clics
  badge?: () => number;
}

// Définir l'interface pour un lien de navigation de la barre latérale, qui peut aussi inclure des sous-liens (sub)
export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean; // Indique si le menu est réduit ou non
  links: SideLink[]; // Liste des liens à afficher
  closeNav: () => void; // Fonction pour fermer le menu si besoin (mobile par exemple)
}

export interface NavLinkProps {
  title: string;
  icon: React.ReactNode;
  label?: string;
  href?: string; // Le href est optionnel pour des actions comme la déconnexion
  subLink?: boolean; // Option pour les sous-liens
  closeNav?: () => void; // Fonction pour fermer le menu (pour les petits écrans)
  onClick?: () => void; // Ajout d'une fonction onClick pour gérer des actions comme la déconnexion
  badge?: () => number;
}

export interface NavLinkDropdownProps {
  title: string;
  icon: React.ReactNode;
  label?: string;
  sub: SideLink[];
  closeNav: () => void;
}

export interface NavLinkIconProps {
  title: string;
  icon: React.ReactNode;
  label?: string;
  href: string; // href doit être une chaîne obligatoire
  closeNav: () => void;
  onClick?: () => void;
}

export interface NavLinkIconDropdownProps {
  title: string;
  icon: React.ReactNode;
  label?: string;
  sub: SideLink[]; // Liste des sous-liens
  closeNav: () => void; // Fonction pour fermer le menu
}

export interface SectionModeProps {
  mode: "view" | "create" | "edit" | "profil" | "password" |
  "fiscal-year" | "fiscal-year-create" | "fiscal-year-edit" |
  "categories" | "categories-create" | "categories-edit" |
  "subcategories" | "subcategories-create" | "subcategories-edit" |
  "calendar-edit"
}