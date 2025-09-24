"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PrimaryButton } from "@/components/shared";
import { heroData } from "@/lib/data/heroData";

export const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const buttonRef1 = useRef<HTMLDivElement>(null);
  const buttonRef2 = useRef<HTMLDivElement>(null);

  // ✅ Animation background + image centrale
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [bgRef.current, imgRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  // ✅ Animation boutons
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        buttonRef1.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        buttonRef2.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.7,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="mt-[100px] relative w-full flex flex-col items-center justify-center overflow-hidden bg-cover bg-center py-4"
      role="banner"
    >
      {/* ✅ Background optimisé */}
      <div
        ref={bgRef}
        className="fixed inset-0 mt-[100px] w-full min-h-[70vh] -z-50 border-none m-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/10 before:via-[#192846]/35 before:to-[#192846]/60"
        aria-hidden="true"
      >
        <Image
          src="/images/img/hero-large.webp"
          alt="" // ✅ image décorative → alt vide
          width={1920}
          height={1151}
          quality={80}
          priority
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-center border-none"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-secondary/40 to-transparent" />
      </div>

      {/* ✅ Contenu */}
      <div className="w-full flex flex-col gap-16 items-center justify-center h-full lg:relative z-10 px-3">
        {/* Title */}
        <div className="font-caption flex flex-col gap-4 max-w-full text-center">
          <h1 className="text-card font-normal text-3xl md:text-4xl lg:text-5xl">
            {heroData.heading}
          </h1>
          <h2 className="block text-card font-normal text-4xl lg:text-5xl">
            {heroData.subHeading}{" "}
            <span className="text-accent text-4xl sm:text-5xl lg:text-6xl">
              {heroData.name}
            </span>
          </h2>
        </div>

        {/* ✅ Main Image (picture pas nécessaire car Next/Image gère WebP) */}
        <div ref={imgRef} className="relative z-10">
          <Image
            src="/images/img/boss.png"
            alt={heroData.imageAlt}
            className="w-[275px] h-[275px] lg:w-[300px] lg:h-[300px] object-cover rounded-full border shadow-gray-500/50 border-gray-600 shadow-md"
            width={640}
            height={640}
            loading="eager"
            priority
          />
        </div>

        {/* Description */}
        <h3 className="block text-accent lg:max-w-5xl font-caption px-3 font-normal text-center text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
          {heroData.text}
        </h3>

        {/* ✅ Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-start gap-12">
          <div ref={buttonRef1}>
            <PrimaryButton
              variant="thirdPortfolio"
              href={heroData.contactButtonHref}
              aria-label="Page de contact"
            >
              <Image
                src="/images/icons/enveloppe.png"
                alt="icône enveloppe"
                width={50}
                height={43}
                loading="lazy"
                className="animate-contactEnvelope shrink-0"
                style={{ animationDuration: "12s" }}
              />
              {heroData.contactButtonText}
            </PrimaryButton>
          </div>

          <div ref={buttonRef2}>
            <PrimaryButton
              variant="thirdPortfolio"
              href={heroData.websiteButtonHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter David Web Projects"
            >
              <Image
                src="/images/logos/logo.png"
                alt="logo du site"
                width={50}
                height={50}
                loading="lazy"
                className="animate-contactLogo shrink-0"
                style={{ animationDuration: "10s" }}
              />
              {heroData.websiteButtonText}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

