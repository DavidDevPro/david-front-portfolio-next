import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { ProjectFeatureProps } from "@/lib/types";

export const ProjectFeature: React.FC<ProjectFeatureProps> = ({ features }) => {
  return (
    <div className="max-w-[1600px] w-full mx-auto flex flex-col p-1 md:px-4 overflow-hidden">
      {/* Liste des fonctionnalités */}
      <div className="flex flex-col gap-3 mx-4 md:px-6">
        <h3 className="text-accent font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold inline-flex items-center justify-center text-center gap-x-4 mb-6">
          <IoSettingsOutline className="animate-contactLogo h-10 w-10 shrink-0 text-card" style={{ animationDuration: "10s" }} />
          Fonctionnalités
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <span
              key={index}
              className="flex items-center flex-col justify-center gap-2 px-1 md:px-4 py-3 bg-secondary/90 text-card text-sm text-center font-medium rounded-2xl border border-accent shadow-md shadow-gray-500/50 overflow-hidden"
            >
              {React.cloneElement(feature.icon, {
                className: "w-7 h-7 md:w-8 md:h-8 text-accent shrink-0",
              })}
              {feature.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


