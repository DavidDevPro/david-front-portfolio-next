import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email("Veuillez entrer un email valide."),
});

export type ForgotPasswordFormInputs = z.infer<typeof forgotPasswordSchema>;

// Schéma de validation pour la réinitialisation du mot de passe
export const resetPasswordSchema = z.object({
  password: z.string().min(4, "Le mot de passe doit comporter au moins 4 caractères."),
  confirmPassword: z.string().min(4, "Le mot de passe de confirmation doit comporter au moins 4 caractères."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe doivent correspondre.",
  path: ["confirmPassword"],
});

// Exporter le type du formulaire de réinitialisation
export type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;

// Définir le schéma pour le formulaire de changement de mot de passe
export const updatePasswordSchema = z.object({
  currentPassword: z.string().min(8, { message: "Mot de passe actuel requis" }),
  newPassword: z.string().min(8, { message: "Nouveau mot de passe requis" }),
  confirmNewPassword: z.string().min(8, { message: "Confirmation du nouveau mot de passe requise" }),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  path: ["confirmNewPassword"],
  message: "Les nouveaux mots de passe doivent correspondre",
});

export type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;
