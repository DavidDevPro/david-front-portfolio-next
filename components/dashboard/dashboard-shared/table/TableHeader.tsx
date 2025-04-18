"use client";

import { TableHeaderProps } from "@/lib/types/admin/dashboard";
import { FaCheck, FaEdit } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TableHeaderButton } from "./TableHeaderButton"; // Import du nouveau composant

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  buttonLabel,
  buttonHref,
  buttonAriaLabel,
  titleClassName,
  selectedYear,
  onYearChange,
  buttonOnClick,
  isButtonDisabled = false,
}) => {
  const [isEditingYear, setIsEditingYear] = useState(false);

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = parseInt(event.target.value, 10);
    if (onYearChange) {
      onYearChange(newYear);
    }
  };

  return (
    <div className="my-2">
      {/* Affichage du titre seulement s'il est fourni */}
      {title && (
        <div className="text-center">
          <h2 className={cn("text-3xl font-bold tracking-tight text-primary", titleClassName)}>
            {title}
          </h2>

          {/* Année modifiable si applicable */}
          {selectedYear !== undefined && (
            <div className="mt-2 flex justify-center">
              {isEditingYear ? (
                <>
                  <input
                    type="number"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="border-b border-gray-300 focus:outline-none focus:border-primary text-xl font-semibold w-20 text-center"
                  />
                  <button
                    onClick={() => setIsEditingYear(false)}
                    className="ml-2 h-6 w-6 shrink-0 text-primary"
                    aria-label="Enregistrer l'année"
                  >
                    <FaCheck />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditingYear(true)}
                  className="ml-2 text-primary flex items-center"
                  aria-label="Modifier l'année"
                >
                  <span className="text-xl font-bold">{selectedYear}</span>
                  <FaEdit className="ml-2 mt-1 h-5 w-5" />
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Affichage du bouton en utilisant le composant externe */}
      {buttonLabel && (
        <div className="mt-4">
          <TableHeaderButton
            buttonLabel={buttonLabel}
            buttonHref={buttonHref}
            buttonOnClick={buttonOnClick}
            buttonAriaLabel={buttonAriaLabel}
            isButtonDisabled={isButtonDisabled}
          />
        </div>
      )}
    </div>
  );
};
