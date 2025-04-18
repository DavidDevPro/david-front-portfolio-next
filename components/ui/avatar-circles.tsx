/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
  className?: string;
  classAvatar?: string;
  numPeople?: number;
  avatarUrls: string[];
  portrait?: string; // Nouvelle propriété ajoutée
}

export const AvatarCircles = ({
  numPeople,
  className,
  classAvatar,
  avatarUrls,
  portrait, // Ajout de la propriété portrait
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <div
          key={index}
          className={cn(
            "rounded-full overflow-hidden border-2 border-white dark:border-gray-800",
            classAvatar
          )}
        >
          <img
            src={url}
            width={40}
            height={40}
            alt={portrait ? `portrait de ${portrait}` : `Avatar ${index + 1}`} // Utilisation de portrait pour le alt
            aria-label={
              portrait ? `portrait de ${portrait}` : `Avatar ${index + 1}`
            } // Utilisation de portrait pour aria-label
            className="object-cover h-full w-full"
          />
        </div>
      ))}
      {/* Afficher le +numPeople uniquement si numPeople est supérieur à 1 */}
      {numPeople && numPeople > 1 && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-card hover:bg-gray-600 dark:border-gray-800 dark:bg-card dark:text-black",
            classAvatar
          )}
        >
          +{numPeople}
        </div>
      )}
    </div>
  );
};


