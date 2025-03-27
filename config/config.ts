export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME!;
export const APP_DEV = process.env.NEXT_PUBLIC_APP_DEV!;
export const APP_MAIL = process.env.NEXT_PUBLIC_APP_MAIL!;
export const APP_ADRESS = process.env.NEXT_PUBLIC_APP_ADRESS!;
export const APP_ADRESS2 = process.env.NEXT_PUBLIC_APP_ADRESS2!;
export const APP_ADRESS3 = process.env.NEXT_PUBLIC_APP_ADRESS3!;
export const APP_TEL = process.env.NEXT_PUBLIC_APP_TEL!;
export const APP_SIRET = process.env.NEXT_PUBLIC_APP_SIRET!;
export const APP_STATUS = process.env.NEXT_PUBLIC_APP_STATUS!;



// Définition de la variable `basename` en fonction du mode de l'environnement
// `name_files` correspond au nom du dossier où se trouvera le site en production (hors racine domaine)
// Si racine, il faut mettre "/"
const basename: string = process.env.NODE_ENV === "production" ? "/" : "";

// Exportation de la variable `basename` pour l'utiliser dans d'autres fichiers
export { basename };

// Importation de `package.json`
import packageJson from '../package.json';

// Définition du type pour `Config`
interface ConfigType {
  version: string;
  releaseDate: string;
  showMaintenance: boolean;
}

// Exportation de la configuration avec la version et toute autre configuration nécessaire
export const Config: ConfigType = {
  version: packageJson.version,
  releaseDate: packageJson.releaseDate,
  showMaintenance: process.env.NEXT_PUBLIC_SHOW_MAINTENANCE === 'false',
};