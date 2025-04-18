//  Définir l'interface pour les données du formulaire de contact
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

// Définir le type pour chaque élément de contact
export type ContactInfoItem = {
label: string;
icon: React.ElementType; // Utilisation de React.ElementType pour les icônes React
text: string;
text2: string;
};

// Définir le type pour chaque élément légal
export type LegalInfoItem = {
label: string;
text: string;
icon: React.ElementType; // Utilisation de React.ElementType pour les icônes React
link?: string; // Facultatif, présent uniquement si c'est un lien
isLink?: boolean; // Facultatif, pour indiquer si c'est un lien
};