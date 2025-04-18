import { CheckedState } from "@radix-ui/react-checkbox";
import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { IconType } from "react-icons";

export interface ButtonSubmitProps {
  ariaLabel: string;
  icon?: IconType; // Type pour une icône de react-icons
  text: string;
  isLoading?: boolean; // Propriété optionnelle pour l'état de chargement
  onClick?: () => void; // Callback pour gérer le clic
  className?:string;
}

// Interface de base pour les propriétés communes à la plupart des composants
export interface BaseInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  errors?: Partial<Record<Path<T>, { message?: string }>>;
  rules?: RegisterOptions<T>;
  clearErrors?: (name: Path<T>) => void;
}

// Interface pour les cases à cocher avec description et gestion de l’état
export interface CheckboxInputProps<T extends FieldValues> extends BaseInputProps<T> {
  label: string;
  description?: string;
  onCheckedChange?: (checked: CheckedState) => void;
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

// Interface pour les champs de saisie de mot de passe
export interface PasswordInputProps<T extends FieldValues> extends BaseInputProps<T> {
  placeholder: string;
}

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