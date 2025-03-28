import { z } from "zod";

// Schéma de validation pour le formulaire de connexion
export const loginSchema = z.object({
  identifiant: z.string().min(2, "Veuillez entrer un identifiant valide."),
  password: z.string().min(4, "Le mot de passe doit comporter au moins 4 caractères."),
});