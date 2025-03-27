"use client";

import { SectionLayout } from "@/components/layout/common";
import { AboutHeader, AboutInfos, AboutMain } from "@/components/about";

export const AboutPage = () => {
  return (
    <>
      <SectionLayout
        title="De l’inspiration à la réalisation, avec passion."
        subtitle="Chaque détail compte pour donner naissance à un projet de qualité."
        paragraph=""
        id="about"
        titleClassName="text-accent mb-12 font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-accent tracking-wide drop-shadow-md text-center"
        subtitleClassName="text-card mb-4 max-w-[1000px]"
        paragraphClassName="text-card my-4 max-w-[1000px]"
      >
        <div className="flex flex-col items-center justify-center px-2 pb-14 text-card z-10">

          <section className="flex flex-col gap-10 w-full max-w-6xl ">

            {/* Bloc "Développeur Freelance" */}
            <AboutHeader />

            {/* Bloc "Développeur Front-End" */}
            <AboutMain />

            {/* Bloc "Informations personnelles" */}
            <AboutInfos />
          </section>
        </div>
      </SectionLayout>
    </>
  );
};