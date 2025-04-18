export interface SocialIconsProps {
  iconSize?: string; // Taille des icônes, ex: 'w-6 h-6'
  spaceBetween?: string; // Espacement entre les icônes, ex: 'space-x-4'
  containerClassName?: string; // Classes CSS supplémentaires pour le conteneur
  iconClassName?: string; // Classes CSS supplémentaires pour les icônes
  align?: "left" | "center" | "right"; // Alignement des icônes
}