"use client";

import { forwardRef } from "react";
import { SectionProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export const SectionLayout = forwardRef<
  HTMLDivElement,
  SectionProps & {
    headingLevel?: "h1" | "h2";
    titleClassName?: string;
    subtitleClassName?: string;
    paragraphClassName?: string;  // Ajout d'un nouveau prop pour le paragraphe
  }
>(
  (
    {
      title,
      subtitle,
      paragraph,
      children,
      className = "pt-16",
      id,
      headingLevel = "h1",
      titleClassName,
      subtitleClassName,
      paragraphClassName,  // Récupération du nouveau prop
    },
    ref
  ) => {
    const TitleTag = headingLevel;
    const SubtitleTag = headingLevel === "h1" ? "h2" : "h3";

    return (
      <section
        id={id}
        ref={ref}
        className={`xl:container pb-14 px-2 sm:px-6 transition-p ease duration-200 ${className}`}
      >
        {title && (
          <div className="flex flex-col items-center mb-8">
            <TitleTag
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-accent/60 to-accent text-transparent bg-clip-text animate-fadeInScale",
                titleClassName
              )}
            >
              {title}
            </TitleTag>
            {subtitle && (
              <SubtitleTag
                className={cn(
                  "mx-auto lg:w-11/12 text-center text-secondary font-medium text-base md:text-lg lg:text-xl animate-fadeInScale",
                  subtitleClassName
                )}
              >
                {subtitle}
              </SubtitleTag>
            )}
            {paragraph && (
              <p
                className={cn(
                  "mx-auto lg:w-11/12 text-center text-base md:text-lg lg:text-xl animate-fadeInScale",
                  paragraphClassName
                )}
              >
                {paragraph}
              </p>
            )}
          </div>
        )}
        {children}
      </section>
    );
  }
);

SectionLayout.displayName = "SectionLayout";

