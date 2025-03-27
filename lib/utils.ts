// Importation des types et fonctions nécessaires depuis "clsx" et "tailwind-merge"
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine et fusionne plusieurs classes CSS en une seule chaîne.
 * Utilise `clsx` pour combiner les classes et `twMerge` pour fusionner intelligemment les classes Tailwind CSS.
 *
 * @param {...ClassValue[]} inputs - Les classes à combiner.
 * @returns {string} La chaîne de classes combinée et fusionnée.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Valide le nom de fichier selon des règles spécifiques.
 * Vérifie que le nom n'est pas vide, ne dépasse pas une certaine longueur,
 * et ne contient que des caractères autorisés (lettres, chiffres, traits d'union et underscores).
 *
 * @param {string | undefined} fileName - Le nom du fichier à valider.
 * @returns {string | true} Retourne un message d'erreur si le nom est invalide, ou `true` si le nom est valide.
 */
export const validateFileName = (fileName: string | undefined): string | true => {
  const FILE_NAME_REGEX = /^[a-zA-Z0-9_-]+$/; // Expression régulière pour les caractères autorisés
  const FILE_NAME_MAX_LENGTH = 30; // Longueur maximale du nom de fichier

  if (!fileName || fileName.length === 0) {
    return "Le nom du fichier ne peut pas être vide.";
  }

  if (!FILE_NAME_REGEX.test(fileName)) {
    return "Le nom du fichier ne doit pas contenir d'espaces ni de caractères spéciaux.";
  }

  if (fileName.length > FILE_NAME_MAX_LENGTH) {
    return `Le nom du fichier ne doit pas dépasser ${FILE_NAME_MAX_LENGTH} caractères.`;
  }

  return true; // Retourne `true` si le nom de fichier est valide
};

/**
 * Formate une chaîne de date dans un format lisible pour les utilisateurs.
 * Par défaut, le format est "Jour Mois Année" (ex : 16 septembre 2024).
 *
 * @param {string} dateString - La chaîne de date à formater.
 * @returns {string} La date formatée.
 */
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }; // Options de formatage de la date
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Retourne un texte de plage d'années formaté pour l'affichage.
 * Si l'année actuelle est 2024, retourne "2024".
 * Sinon, retourne "2024 - <annéeCourante>".
 * 
 * @returns {string} Le texte de l'année formaté.
 */
export function getYearText(): string {
  const currentYear = new Date().getFullYear(); // Récupère l'année actuelle
  return currentYear === 2024 ? "2024" : `2024 - ${currentYear}`;
}

/**
 * Formate un numéro de téléphone en une représentation plus lisible.
 * Supprime les caractères non numériques et ajoute des espaces après chaque groupe de 2 chiffres.
 * 
 * @param {string | undefined} phone - Le numéro de téléphone à formater.
 * @returns {string} Le numéro de téléphone formaté ou "N/A" si le numéro est invalide.
 */
export const formatPhoneNumber = (phone: string | undefined): string => {
  if (!phone) return "N/A"; // Retourne "N/A" si le numéro est vide ou indéfini

  // Supprime tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, "");

  // Formate le numéro de téléphone en ajoutant un espace après chaque groupe de 2 chiffres
  const formattedPhone = cleaned.replace(/(\d{2})(?=\d)/g, "$1 ");

  return formattedPhone; // Retourne le numéro de téléphone formaté
};
