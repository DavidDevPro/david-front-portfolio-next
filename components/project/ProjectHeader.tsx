"use client";

import { ProjectHeaderProps } from "@/lib/types";

export const ProjectHeader = ({ title, description }: ProjectHeaderProps) => {
  return (
    <div className="px-2 md:px-6 py-6 text-center">
      <h1 className="text-accent font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {`Projet : ${title}`}
      </h1>
      <p className="text-card text-md md:text-lg leading-relaxed">{description}</p>
    </div>
  );
};


