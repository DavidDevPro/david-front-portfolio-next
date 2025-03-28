import { z } from "zod";

// Schéma pour la réponse générique de l'API (par exemple, succès et message)
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

// Schéma pour les données du formulaire de réinitialisation de mot de passe à envoyer à l'API
export const forgotPasswordApiSchema = z.object({
  email: z.string().email("Veuillez entrer un email valide."),
});

// Schéma pour les données de réinitialisation de mot de passe à envoyer à l'API
export const resetPasswordApiSchema = z.object({
  token: z.string(),
  email: z.string().email("Veuillez entrer un email valide."),
  password: z.string().min(4, "Le mot de passe doit comporter au moins 4 caractères."),
  confirmPassword: z.string().min(4, "Le mot de passe de confirmation doit comporter au moins 4 caractères."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe doivent correspondre.",
  path: ["confirmPassword"],
});

// Type dérivé pour la réponse d'API
export type PasswordResponse = z.infer<typeof apiResponseSchema>;

// Export du schéma pour la réponse d'API
export const passwordResponseSchema = apiResponseSchema;
