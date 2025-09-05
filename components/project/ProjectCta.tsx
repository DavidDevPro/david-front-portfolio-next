"use client";

import React from "react";
import { PrimaryButton } from "@/components/shared";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from "next/image";

export function ProjectCTA() {
  return (
    <div className="px-4 md:px-6 max-w-[1600px] w-full mx-auto">
      <div className=" px-4 md:px-6 py-8 bg-secondary/90 rounded-2xl border shadow-gray-600/50 border-gray-700 shadow-md overflow-hidden text-card flex flex-col gap-3">
        {/* Titre animé */}
        <h2 className="font-montserrat text-accent gap-2 text-xl sm:text-2xl md:text-3xl font-semibold inline-flex items-center justify-center gap-x-4 mb-4">
          <FaRegQuestionCircle className="animate-contactLogo h-10 w-10 shrink-0 text-card"
            style={{ animationDuration: "10s" }} />
          Vous avez des questions ?
        </h2>

        <p className="text-card text-md md:text-lg leading-relaxed text-center mb-4">
          Vous souhaitez réaliser un projet similaire&nbsp;? Profitez de mon
          expertise et contactez-moi pour en discuter&nbsp;!
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          {/* Bouton 1 : "Me Contacter" */}
          <PrimaryButton
            variant="thirdPortfolio"
            href="/contact"
            target="_blank"
            aria-label="Page du site web"
            rel="noopener noreferrer"
            className=" border-accent bg-[#182642] hover:border-accent hover:text-secondary text-accent hover:scale-102 will-change-transform"
          >
            <Image
              src="/images/icons/enveloppe.png"
              alt={"image d'enveloppe"}
              width={80}
              height={69}
              loading="lazy"
              className="animate-contactEnvelope shrink-0 w-[50px] h-[43px]"
              style={{ animationDuration: "12s" }} />
            Me Contacter
          </PrimaryButton>

          {/* Bouton 2 : "Demander un devis" */}
          <PrimaryButton
            variant="thirdPortfolio"
            href="https://davidwebprojects.fr/formules"
            target="_blank"
            aria-label="Page du site web"
            rel="noopener noreferrer"
            className=" border-accent bg-[#182642] hover:border-accent hover:text-secondary text-accent hover:scale-102 will-change-transform"
          >
            <Image
              src="/images/icons/devis.png"
              alt={"image d'enveloppe"}
              width={80}
              height={80}
              loading="lazy"
              className="animate-floatingLogo shrink-0 w-[45px] h-[45px]"
              style={{ animationDuration: "16s" }} />

            Demander un devis
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
