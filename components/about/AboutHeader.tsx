"use client";

import Image from "next/image";
import { PrimaryButton } from "@/components/shared";

export const AboutHeader = () => {
  return (
    <div className="relative bg-secondary/90 py-10 px-3 sm:px-6 md:px-8 rounded-2xl border shadow-gray-600/50 border-gray-700 shadow-md overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold text-accent mb-6 sm:mb-8">
            Freelance depuis Septembre 2024
          </h3>
          <p className="text-card leading-relaxed text-sm sm:text-base md:text-lg mb-6">
            {`Depuis septembre 2024, j'ai décidé de mettre mon expertise au service de projets web ambitieux en tant que freelance.
            Mon objectif : concevoir des sites performants, optimisés et élégants pour répondre aux besoins de mes clients.`}
          </p>
          <p className="text-card leading-relaxed text-sm sm:text-base md:text-lg">
            {`Que vous ayez besoin d’un site vitrine ou de solutions de développement, je suis là pour transformer vos idées en réalité numérique.`}
          </p>
          <div className="mt-8">
            <PrimaryButton
              variant="thirdPortfolio"
              href="https://davidwebprojects.fr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David Web Projects site"
              className="max-w-80 mx-auto"
            >
              <Image
                src="/images/icons/click.png"
                alt="image d'une main qui clique"
                width={80}
                height={80}
                loading="eager"
                priority
                className="animate-contactLogo shrink-0 w-[40px] h-[40px]"
                style={{ animationDuration: "10s" }}
              />
              David Web Projects
            </PrimaryButton>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-6 md:mt-0 w-full">
          <a href="https://davidwebprojects.fr/" target="_blank" rel="noopener noreferrer" className="relative w-full sm:max-w-lg h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-700 group">
            <div className="relative w-full h-full">
              <Image
                src="/images/projects/cover_davidwebprojects.webp"
                alt="Accueil de mon site freelance"
                layout="fill"
                objectFit="cover"
                className="rounded-xl border border-gray-300 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-lg will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};