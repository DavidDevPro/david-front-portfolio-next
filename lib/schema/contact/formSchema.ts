import { z } from "zod";

export const MAX_CHAR_COUNT = 500;
export const MIN_CHAR_COUNT = 10;

export const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit comporter au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit comporter au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  phone: z.string().min(10, {
    message: "Le numéro de téléphone doit comporter au moins 10 caractères.",
  }),
  subject: z.string().min(2, {
    message: "Le sujet doit comporter au moins 2 caractères.",
  }),
  message: z.string()
    .min(MIN_CHAR_COUNT, { message: `Le message doit contenir au moins ${MIN_CHAR_COUNT} caractères.` })
    .max(MAX_CHAR_COUNT, { message: `Le message ne doit pas dépasser ${MAX_CHAR_COUNT} caractères.` }),
  consent: z.boolean().refine((value) => value === true, {
    message: "Vous devez accepter de soumettre vos informations personnelles.",
  }),
});
