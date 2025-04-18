"use client";

import { ProjectFilterProps } from "@/lib/types";
import { useState } from "react";

export const ProjectFilter: React.FC<ProjectFilterProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<"all" | "integration" | "full-dev">("all");

  const handleFilterClick = (filter: "all" | "integration" | "full-dev") => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 w-full max-w-[90%] sm:max-w-[600px] mx-auto">
      {[
        { label: "Tous", value: "all" },
        { label: "Intégration HTML/CSS", value: "integration" },
        { label: "Développement Complet", value: "full-dev" },
      ].map(({ label, value }) => (
        <button
          key={value}
          className={`px-2 sm:px-4 py-2 rounded-lg transition-all ease-in-out text-sm sm:text-base duration-300 hover:scale-[1.01] will-change-transform font-semibold border
                        ${activeFilter === value ? "bg-secondary/90 text-card border border-accent" : "bg-card text-secondary border-accent"}
                    `}
          onClick={() => handleFilterClick(value as "all" | "integration" | "full-dev")}
        >
          {label}
        </button>
      ))}
    </div>
  );
};