"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AvatarCircles, Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { pictureUrl } from "@/config/pictureConfig";

import { FaChevronDown, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { showFormSuccess } from "@/lib/notifications/toastMessages";
import { Loader } from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuthStore } from '@/lib/store';


const imageBasePath = `${pictureUrl}/profile_images/`;
const DEFAULT_AVATAR_URL = `${pictureUrl}/profile_images/defaut.jpg`;

export const UserNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  // 📢 Récupère les infos utilisateur directement depuis le store Zustand
  const profilePicture = useAuthStore((state) => state.profilePicture);
  const identifiant = useAuthStore((state) => state.identifiant);

  const getAvatarFallback = () => {
    return identifiant ? identifiant.charAt(0).toUpperCase() : "A";
  };

  const avatarUrl = profilePicture ? `${imageBasePath}${profilePicture}` : DEFAULT_AVATAR_URL;

  const handleProfileClick = () => {
    router.push("/dashboard/account");
  };

  const handleAccountSettingsClick = () => {
    router.push("/dashboard/account/password-reset");
  };

  const handleLogoutClick = async () => {
    setLoading(true);
    try {
      // ✅ Attendre la déconnexion complète
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
      }, 2000); // 2000 ms = 2 secondes

      // Réinitialisation de l'état de chargement
      setLoading(false);
    }
  };

  return (
    <DropdownMenu onOpenChange={handleMenuToggle}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center p-6 space-x-2">
          <AvatarCircles
            avatarUrls={[avatarUrl]}
            classAvatar="h-10 w-10 object-cover rounded-full"
            portrait={getAvatarFallback()}
          />
          <div className="flex flex-col text-left">
            <p className="text-sm font-medium">
              {identifiant ? identifiant.charAt(0).toUpperCase() + identifiant.slice(1) : "Utilisateur"}
            </p>
          </div>
          <FaChevronDown className={`h-4 w-4 text-gray-500 ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 bg-white shadow-md rounded-md" align="end">
        <DropdownMenuLabel className="font-normal px-1 py-2">
          <div className="flex items-center space-x-3">
            <AvatarCircles
              avatarUrls={[avatarUrl]}
              classAvatar="h-10 w-10 object-cover rounded-full"
              portrait={getAvatarFallback()}
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold">
                {identifiant ? identifiant.charAt(0).toUpperCase() + identifiant.slice(1) : "Utilisateur"}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleProfileClick}>
            <FaRegUser className="ml-1 mr-2 h-6 w-6 text-primary" />
            Voir le profil
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleAccountSettingsClick}>
            <IoSettingsOutline className="ml-1 mr-2 h-6 w-6 text-primary" />
            Paramètres du compte
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogoutClick} disabled={loading}>
          {loading ? (
            <Loader className="ml-1 mr-2 h-6 w-6 animate-spin" aria-hidden="true" />
          ) : (
            <FaSignOutAlt className="ml-1 mr-2 h-6 w-6 text-primary" />
          )}
          {loading ? "Déconnexion..." : "Déconnexion"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
