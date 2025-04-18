"use client";

import { SectionLayout } from "@/components/layout/common";
import { ContactHeader, ContactContent, ContactFooter, ContactFormWrapper } from "./";
import { Separator } from "@/components/ui";

export const Contact: React.FC = () => {
  return (
    <SectionLayout
      title="Echangeons sur vos idées !"
      subtitle="Chaque détail compte pour donner naissance à un projet de qualité. Discutons ensemble de vos attentes, affinons vos idées et construisons une solution efficace et impactante."
      paragraph="Veuillez remplir le formulaire ci-dessous et je vous répondrai dans les plus brefs délais."
      id="contact"
      titleClassName="text-accent mb-12"
      subtitleClassName="text-card mb-4 max-w-[1000px]"
      paragraphClassName="text-card my-4 max-w-[1000px]"
    >
      <div className="sm:w-10/12 w-full mx-auto bg-background p-4 lg:p-8 rounded-xl flex flex-col lg:flex-row items-stretch space-y-8 lg:space-y-0 relative z-10 shadow-md border border-accent shadow-gray-500/50">
        <div className="w-full lg:w-1/2 space-y-4 flex gap-2 flex-col">
          <ContactHeader />
          <ContactContent />
          <ContactFooter />
        </div>

        {/* Séparateur entre les deux colonnes */}
        <div className="hidden lg:block w-px bg-accent mx-4"></div>
        <Separator className="bg-accent lg:hidden w-10/12 mx-auto" />

        <ContactFormWrapper />
      </div>
    </SectionLayout>
  );
};
