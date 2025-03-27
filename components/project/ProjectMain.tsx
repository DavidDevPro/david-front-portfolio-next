"use client";

import { PrimaryButton } from "@/components/shared";
import { ProjectMainProps } from "@/lib/types";
import Image from "next/image";
import { IoInformationCircleOutline } from "react-icons/io5";

export const ProjectMain = ({ project }: ProjectMainProps) => {
  return (
    <div className="max-w-screen w-full bg-secondary/90 shadow-md shadow-gray-600/50 border-t border-b border-gray-600">
      <div className="relative z-10 flex flex-col gap-14 py-12 px-4 sm:px-6 rounded-2xl max-w-[1200px] mx-auto">
        <h2 className="text-accent font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold inline-flex items-center justify-center gap-x-4 mb-8">
          <IoInformationCircleOutline className="animate-contactLogo h-12 w-12 shrink-0 text-card" style={{ animationDuration: "10s" }} />
          A propos du projet</h2>
        {project.sections.map((section, index) => (
          <div key={index}>
            <h3 className=" flex gap-4 items-center font-montserrat text-accent text-xl md:text-2xl font-semibold">
              <Image
                src="/images/icons/arrowCard.png"
                alt={"image d'une flèche"}
                width={64}
                height={64}
                loading="lazy"
                className="animate-arrowButton shrink-0 w-[40px] h-[40px]"
                style={{ animationDuration: "10s" }} />
              {section.title}</h3>
            <p className="text-card text-md md:text-lg leading-relaxed mt-3">{section.content}</p>
          </div>
        ))}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {project.link && (
            <PrimaryButton
              href={project.link}
              target="_blank"
              aria-label="Page du site web"
              className="h-16 hover:border-card hover:text-secondary hover:bg-accent/80 hover:scale-102 will-change-transform"
            >
              <Image
                src="/images/logos/logo.png"
                alt={"image du logo"}
                width={80}
                height={80}
                loading="lazy"
                className="animate-contactLogo shrink-0 w-[50px] h-[50px]"
                style={{ animationDuration: "10s" }} />
              <span>Voir le site</span>
            </PrimaryButton>
          )}
        </div>

      </div>
    </div>
  );
};


