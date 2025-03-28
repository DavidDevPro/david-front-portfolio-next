import Cookies from 'js-cookie';
import { useAuthStore } from '@/lib/store';

// Lorsqu'un utilisateur se connecte
export function login(token: string) {
  Cookies.set("authToken", token, { expires: 7 }); // Stocke le token pendant 7 jours
  const setToken = useAuthStore.getState().setToken;
  setToken(token); // Met à jour le store Zustand
}

// Lorsqu'un utilisateur se déconnecte
export function logout() {
  Cookies.remove("authToken"); // Supprime le cookie
  const setToken = useAuthStore.getState().setToken;
  setToken(null); // Met le token Zustand à null
}