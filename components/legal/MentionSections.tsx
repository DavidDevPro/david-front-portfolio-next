"use client";

import { MentionContent, mentionsContent } from "@/lib/data/common/mentionsData";

import { Card } from "@/components/ui";
import { SectionLayout } from "@/components/layout/common";


export const MentionSections: React.FC = () => {
  return (
    <SectionLayout
      title="Mentions Légales"
      id="mentions"
      titleClassName="text-accent mb-12 mt-4 font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-accent tracking-wide drop-shadow-md text-center"
    >
      <div className="space-y-10 max-w-[1600px] mx-auto">
        {mentionsContent.map((section: MentionContent, index: number) => (
          <Card
            key={index}
            className="group bg-secondary/90 border border-accent py-8 px-3 md:px-6 rounded-2xl shadow-md shadow-gray-400/50"
          >
            <div className="group bg-background flex items-center mb-12 rounded-lg p-1 w-full sm:w-10/12 md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-md shadow-gray-500/50 border border-gray-500">
              {section.icon} {/* Affiche l'icône de chaque section */}
              <h2 className="text-2xl font-semibold font-montserrat ml-2 text-secondary">{section.title}</h2>
            </div>
            <div
              className="text-lg text-card"
            >
              {section.description}
            </div>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};