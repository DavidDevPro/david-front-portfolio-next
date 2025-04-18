// src/config/pictureConfig.ts

// Importation de la variable pictureUrl à partir des variables d'environnement de Next.js
const pictureUrl: string = process.env.NEXT_PUBLIC_IMAGE_BASE_URL as string;

// Vérification de l'existence de l'URL de base des images, déclenche une erreur si elle n'est pas définie
if (!pictureUrl) {
  throw new Error('NEXT_PUBLIC_IMAGE_BASE_URL is not defined in the environment variables');
}

// Exportation de la variable pictureUrl pour la rendre accessible depuis d'autres fichiers
export { pictureUrl };