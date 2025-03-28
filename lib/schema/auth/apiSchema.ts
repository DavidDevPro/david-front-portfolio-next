import { z } from 'zod';

// Schéma de validation pour la réponse de l'API de connexion
export const loginApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(), // Le message "Connexion réussie" est inclus
  data: z.object({
    success: z.boolean(), // ✅ Le champ success est dans data
    id: z.number(),
    identifiant: z.string(),
    token: z.string(),
    urlPictureProfil: z.string(),
    userRole: z.string(),
  })
});

// Type dérivé du schéma pour la réponse de connexion
export type LoginApiResponse = z.infer<typeof loginApiResponseSchema>;

// Schéma de validation pour la réponse de l'API de déconnexion
export const logoutApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(), // Le message "Déconnexion réussie"
  data: z.array(z.unknown()), // Tableau de données (vide dans ce cas)
});

// Type dérivé du schéma pour la réponse de déconnexion
export type LogoutApiResponse = z.infer<typeof logoutApiResponseSchema>;
