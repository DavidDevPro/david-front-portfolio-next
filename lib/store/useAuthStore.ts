import { create } from "zustand";
import Cookies from "js-cookie";
import { logoutUser } from "@/lib/api/authApi";
import { AuthState } from "@/lib/types/auth";
import { useDashboardStore } from "./useDashboardStore";

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  userRole: null,
  profilePicture: null,
  identifiant: null,
  email: null,
  isLoggingOut: false,
  isClientLoaded: false,

  setToken: (token) => {
    set({ token });

    if (token) {
      setTimeout(() => {
        const dashboardStore = useDashboardStore.getState();
        if (!dashboardStore.dashboardLoaded) {
          dashboardStore.fetchDashboardData(token); // ✅ Token injecté
        }
      }, 0);
    }
  },

  setUserInfo: (info) => set((state) => ({ ...state, ...info })),

  loadTokenFromCookies: () => {
    set({ isClientLoaded: true });

    const token = Cookies.get("authToken") ?? null;
    const userRole = Cookies.get("userRole") ?? null;
    const profilePicture = Cookies.get("profilePicture") ?? null;
    const identifiant = Cookies.get("identifiant") ?? null;
    const email = Cookies.get("email") ?? null;

    set({ token, userRole, profilePicture, identifiant, email });

    if (token) {
      setTimeout(() => {
        const dashboardStore = useDashboardStore.getState();
        if (!dashboardStore.dashboardLoaded) {
          dashboardStore.fetchDashboardData(token); // ✅ Token injecté
        }
      }, 0);
    }
  },

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

      useDashboardStore.setState({
        projects: [],
        metadata: { technologies: [], features: [], types: [], tags: [] },
        dashboardLoaded: false,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
      set({ isLoggingOut: false });
      throw new Error("Impossible de se déconnecter du serveur.");
    }
  },
}));
