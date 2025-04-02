// Définir l'interface pour les données de demande d'email de réinitialisation
export interface ForgotPasswordData {
  email: string; // L'email de l'utilisateur
}
  
  // Définir l'interface pour la réponse de l'API d'envoi d'email de réinitialisation
export interface PasswordResponse {
  success: boolean;
  message: string;
}

  // Définir l'interface pour les données de réinitialisation de mot de passe
export interface ResetPasswordData {
  token: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Définir l'interface pour les données de vérification du mot de passe actuel
export interface VerifyPasswordData {
  currentPassword: string; // Le mot de passe actuel de l'utilisateur
}

// Définir l'interface pour les données de mise à jour de mot de passe
export interface UpdatePasswordData {
  currentPassword: string; // Le mot de passe actuel de l'utilisateur
  newPassword: string;     // Le nouveau mot de passe
  confirmPassword: string; // Confirmation du nouveau mot de passe
}