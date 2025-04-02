import { showFormSuccess } from '@/lib/notifications/toastMessages';
import {
  IconLayoutDashboard,
  IconSettings,
  IconChartLine,
} from '@tabler/icons-react';
import { FaSignOutAlt } from "react-icons/fa";
import { SideLink } from '@/lib/types/admin/layoutDashboard';
import { useAuthStore } from '@/lib/store';
import { useMemo } from 'react';
import { BsClipboardData } from 'react-icons/bs';

// Composant exporté pour générer les routes avec réactivité
export const useSideLinks = (): SideLink[] => {


  // Génération des liens avec useMemo pour éviter des re-rendus inutiles
  const sidelinks = useMemo<SideLink[]>(
    () => [
      {
        title: 'Tableau de Bord',
        href: '/admin',
        icon: <IconLayoutDashboard size={24} />,
      },
      {
        title: 'Projets',
        href: '/admin/projects',
        icon: <BsClipboardData size={24} />,
      },
      {
        title: 'Statistiques',
        href: '/admin/statistics',
        icon: <IconChartLine size={24} />,
      },
      {
        title: 'Paramètres',
        href: '/admin/settings',
        icon: <IconSettings size={24} />,
      },
      {
        title: 'Déconnexion',
        icon: <FaSignOutAlt size={24} />,
        onClick: async () => {
          try {
            const logout = useAuthStore.getState().logout;
            await logout();
            showFormSuccess("Déconnexion réussie avec succès !");
          } catch (error) {
            console.error("Erreur lors de la déconnexion côté serveur :", error);
          } finally {
            // Suppression des cookies pour garantir la déconnexion côté client
            document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "userRole=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "profilePicture=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "identifiant=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            // Suppression du sessionStorage pour éviter que le nouvel utilisateur récupère les données de l'ancien
            sessionStorage.clear();

            // Redirection vers la page d'accueil
            setTimeout(() => {
              window.location.href = "/";
            }, 2000);
          }
        },
      },
    ],
    []
  );

  return sidelinks;
};
