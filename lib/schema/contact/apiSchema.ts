import { z } from 'zod';

// Schéma de validation pour la réponse générique de l'API
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

// Schéma pour la validation des données du formulaire de contact à envoyer à l'API
export const contactFormApiSchema = z.object({
  first_name: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères." }),
  last_name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  phone: z.string().min(10, { message: "Le numéro de téléphone doit comporter 10 chiffres." }),
  subject: z.string().min(2, { message: "Le sujet est requis." }),
  message: z.string()
    .min(10, { message: "Le message doit comporter au moins 10 caractères." })
    .max(300, { message: "Le message ne doit pas dépasser 300 caractères." }),
  consent: z.boolean(),
  namewebsite: z.string().optional(),
});

// Types dérivés des schémas Zod
export type ApiResponse = z.infer<typeof apiResponseSchema>;
export type ContactFormApi = z.infer<typeof contactFormApiSchema>;