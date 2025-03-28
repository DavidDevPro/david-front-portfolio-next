import { create } from "zustand";
import Cookies from "js-cookie";
import { logoutUser } from "@/lib/api/authApi";
// import { useDashboardStore } from "@/lib/store";
import { AuthState } from "@/lib/types/auth";

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  userRole: null,
  profilePicture: null,
  identifiant: null,
  email: null,
  isLoggingOut: false,
  isClientLoaded: false,

  // Définir le token lors de la connexion
  setToken: (token) => {
    set({ token });

    if (token) { // ✅ Vérifier que token n'est pas null avant de l'utiliser
      setTimeout(() => {
        // const dashboardStore = useDashboardStore.getState();
        // if (!dashboardStore.dashboardLoaded) {
        //   dashboardStore.fetchDashboardData(token);
        // }
      }, 0);
    }
  },

  // Mettre à jour les infos utilisateur
  setUserInfo: (info) => set((state) => ({ ...state, ...info })),

  // Charger le token depuis les cookies (uniquement côté client)
  loadTokenFromCookies: () => {
    set({ isClientLoaded: true }); // On indique que le client est chargé

    const token = Cookies.get("authToken") ?? null;
    const userRole = Cookies.get("userRole") ?? null;
    const profilePicture = Cookies.get("profilePicture") ?? null;
    const identifiant = Cookies.get("identifiant") ?? null;
    const email = Cookies.get("email") ?? null;

    set({ token, userRole, profilePicture, identifiant, email });

    setTimeout(() => {
      // const dashboardStore = useDashboardStore.getState();
      // if (!dashboardStore.dashboardLoaded && token) {
      //   dashboardStore.fetchDashboardData(token);
      // }
    }, 0);
  },

  // Méthode de déconnexion avec appel API
  logout: async () => {
    try {
      set({ isLoggingOut: true });

      await logoutUser();

      set({
        token: null,
        userRole: null,
        profilePicture: null,
        identifiant: null,
        email: null,
        isLoggingOut: false,
      });

      if (typeof window !== "undefined") {
        Cookies.remove("authToken");
        Cookies.remove("userRole");
        Cookies.remove("profilePicture");
        Cookies.remove("identifiant");
        Cookies.remove("email");
        localStorage.setItem("logoutSuccess", "true");
      }
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
      set({ isLoggingOut: false });
      throw new Error("Impossible de se déconnecter du serveur.");
    }
  },
}));
