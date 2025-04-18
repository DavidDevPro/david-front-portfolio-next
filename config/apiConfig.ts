// src/config/apiConfig.ts

// Importation de la variable apiUrl à partir des variables d'environnement de Next.js
const apiUrl: string = process.env.NEXT_PUBLIC_API_URL as string;

// Vérification de l'existence de l'URL API, déclenche une erreur si elle n'est pas définie
if (!apiUrl) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined in the environment variables');
}

// Exportation de la variable apiUrl pour la rendre accessible depuis d'autres fichiers
export { apiUrl };