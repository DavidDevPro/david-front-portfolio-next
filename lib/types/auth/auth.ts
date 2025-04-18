// * Définir l'interface pour les données du formulaire de connexion
export interface LoginFormData {
  identifiant: string;
  password: string;
}

// Définir l'interface pour la réponse de l'API de connexion
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    success: boolean;
    id: number;
    identifiant: string;
    token: string;
    urlPictureProfil: string;
    userRole: string;
  };
}

// Définir l'interface pour la réponse de déconnexion
export interface LogoutResponse {
  success: boolean;
  message: string; // Le message "Déconnexion réussie"
  data: unknown[]; // Tableau de données (vide dans ce cas)
}

// * Type pour les champs du formulaire
export interface ResetPasswordFormInputs {
  password: string;
  confirmPassword: string;
}
// * Type pour les champs du formulaire
export interface AuthSectionProps {
  formType: "login" | "forgot-password" | "reset-password";
  token?: string;
  email?: string;
}

export interface AuthState {
  token: string | null;
  userRole: string | null;
  profilePicture: string | null;
  identifiant: string | null;
  email: string | null;
  isLoggingOut: boolean;
  isClientLoaded: boolean;
  setToken: (token: string | null) => void;
  setUserInfo: (info: Partial<Omit<AuthState, "setToken" | "setUserInfo" | "logout">>) => void;
  loadTokenFromCookies: () => void;
  logout: () => Promise<void>;
}