"use client";

import { ProjectTechnologieProps } from "@/lib/types";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";

export const ProjectTechnologie = ({ technologies }: ProjectTechnologieProps) => {
  return (
    <div className=" max-w-[1200px] w-full mx-auto p-4 md:p-6 text-center">
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-accent font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold inline-flex items-center gap-x-4 mb-6">
          <FaLaptopCode className="animate-contactLogo h-10 w-10 shrink-0 text-card" style={{ animationDuration: "10s" }} />
          Technologies utilisées
        </h3>
        <div className="flex gap-6 justify-center flex-wrap mt-2">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-3 px-6 py-3 border border-accent bg-secondary/90 rounded-lg shadow-md">
              <span className="text-accent text-3xl">{tech.icon}</span>
              <span className="font-montserrat text-sm font-medium text-card">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};