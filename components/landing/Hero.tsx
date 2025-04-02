"use client";

import Image from "next/image";
import { PrimaryButton } from "@/components/shared";
import { heroData } from "@/lib/data/heroData";
import { APP_NAME } from "@/config/config";

export const Hero: React.FC = () => {

  return (
    <section
      className="mt-[100px] relative w-full flex items-center justify-center overflow-hidden bg-cover bg-center py-4 flex-col"
      role="banner"
    >
      {/* Background */}
      <div
        className="before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/10 before:via-[#192846]/35 before:to-[#192846]/60 inset-0 mt-[73px] fixed top-0 left-0 w-full min-h-[70vh] -z-50 border-none m-0"
        aria-hidden="true"
      >
        <picture>
          <source srcSet="/images/img/hero-large.webp" type="image/webp" />
          <source srcSet="/images/imd/hero-large.jpg" type="image/jpeg" />
          <Image
            src="/images/img/hero-large.jpg"
            alt={`section hero du portfolio ${APP_NAME}`}
            width={1920}
            height={1151}
            quality={80}
            sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw, 
            33vw"
            priority
            loading="eager"
            aria-label={`section hero du portfolio ${APP_NAME}`}
            className="h-full w-full object-cover object-center border-none m-0"
          />
        </picture>
        <div
          className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-secondary/40 to-transparent z-0 border-none m-0"
        ></div>
      </div>


      {/* Content */}
      <div
        className="w-full flex flex-col gap-16 place-items-center justify-center h-full lg:relative z-10 px-3"
      >
        {/* Title */}
        <div
          className="font-caption flex flex-col gap-4 max-w-full text-center"
        >
          <h1 className="text-card font-normal text-3xl md:text-4xl lg:text-5xl">
            {heroData.heading}
          </h1>
          <h2
            className="block text-card font-normal text-4xl lg:text-5xl"
          >
            {heroData.subHeading}
            <span
              className="text-accent text-4xl sm:text-5xl lg:text-6xl"
            >
              {heroData.name}
            </span>
          </h2>
        </div>

        {/* Main Image */}
        <picture
          className="z-10"
        >
          <source srcSet="/images/img/boss.webp" type="image/webp" />
          <source srcSet="/images/img/boss.png" type="image/png" />
          <Image
            src="/images/img/boss.png"
            alt={heroData.imageAlt}
            className="w-[275px] h-[275px] lg:w-[300px] lg:h-[300px] object-cover rounded-full border shadow-gray-500/50 border-gray-600 shadow-md"
            width={640}
            height={640}
            loading="eager"
            priority
          />
        </picture>

        {/* Description */}
        <h3
          className="block text-accent lg:max-w-5xl font-caption px-3 font-normal text-center text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight"
        >
          {heroData.text}
        </h3>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-start gap-12"
        >
          <div >
            <PrimaryButton
              variant="thirdPortfolio"
              href={heroData.contactButtonHref}
              aria-label="Page de contact"
            >
              <Image
                src="/images/icons/enveloppe.png"
                alt={"image d'enveloppe"}
                width={80}
                height={69}
                loading="lazy"
                className="animate-contactEnvelope shrink-0 w-[50px] h-[43px]"
                style={{ animationDuration: "12s" }} />
              {heroData.contactButtonText}
            </PrimaryButton>
          </div>

          <div>
            <PrimaryButton
              variant="thirdPortfolio"
              href={heroData.websiteButtonHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David Web Projects site"
            >
              <Image
                src="/images/logos/logo.png"
                alt={"image du logo"}
                width={80}
                height={80}
                loading="lazy"
                className="animate-contactLogo shrink-0 w-[50px] h-[50px]"
                style={{ animationDuration: "10s" }} />
              {heroData.websiteButtonText}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

