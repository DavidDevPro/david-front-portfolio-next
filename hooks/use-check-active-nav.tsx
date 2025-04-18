"use client";

import { usePathname } from 'next/navigation';

// Hook personnalisé pour vérifier si un lien est actif
export default function useCheckActiveNav() {
  const pathname = usePathname(); // Récupère la route actuelle

  // Fonction qui vérifie si le lien est actif
  const checkActiveNav = (href: string): boolean => {
    // Comparaison exacte pour les routes qui ont une correspondance exacte
    if (pathname === href) {
      return true;
    }

    // Vérifie si la route actuelle est une sous-route du lien (sauf pour /dashboard root)
    if (href.startsWith('/dashboard') && pathname.startsWith(href) && href !== '/dashboard') {
      return true;
    }

    // Ne jamais considérer la route de déconnexion comme active
    if (href === '/logout') {
      return false;
    }

    return false;
  };

  return { checkActiveNav };
}
