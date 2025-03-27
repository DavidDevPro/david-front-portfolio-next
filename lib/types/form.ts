import { CheckedState } from '@radix-ui/react-checkbox';
import { Control, FieldValues, Path, RegisterOptions} from 'react-hook-form';
import { IconType } from "react-icons";

// Interface de base pour les propriétés communes à la plupart des composants
export interface BaseInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  errors?: Partial<Record<Path<T>, { message?: string }>>;
  rules?: RegisterOptions<T>;
  clearErrors?: (name: Path<T>) => void;
}


// Définir l'interface pour les données du formulaire de contact
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}
export interface ContactFormApi {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
  namewebsite: string;
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

// Interface pour les champs de saisie de texte avec icône et description
export interface TextInputProps<T extends FieldValues> extends BaseInputProps<T> {
  label: string;
  placeholder: string;
  icon: IconType;
  type?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  iconColor?:string;
}

// Interface pour les champs de saisie de mot de passe
export interface PasswordInputProps<T extends FieldValues> extends BaseInputProps<T> {
  placeholder: string;
}

// Interface pour la zone de texte de commentaire avec compte de caractères
export interface CommentTextAreaProps<T extends FieldValues> extends BaseInputProps<T> {
  label?: string; // Le label est facultatif et dynamique
  charCount: number;
  maxCharCount: number;
  handleCommentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  textareaClassName?: string;
  isRequired?: boolean;
}

// Interface pour les cases à cocher avec description et gestion de l’état
export interface CheckboxInputProps<T extends FieldValues> extends BaseInputProps<T> {
  label: string;
  description?: string;
  onCheckedChange?: (checked: CheckedState) => void;
}

export interface ButtonSubmitProps {
  ariaLabel: string;
  icon?: IconType; // Type pour une icône de react-icons
  text: string;
  isLoading?: boolean; // Propriété optionnelle pour l'état de chargement
  onClick?: () => void; // Callback pour gérer le clic
  className?:string;
}