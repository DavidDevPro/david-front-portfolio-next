"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CopyrightText, FooterLinks, SocialIcons } from "@/components/shared";

export const SiteFooter = () => {
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation des icônes sociales (scale)
      gsap.fromTo(
        socialIconsRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Animation du copyright et des liens (opacity)
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3, // Petit délai pour la progression visuelle
        }
      );
    });

    return () => ctx.revert(); // Nettoyage
  }, []);

  return (
    <footer
      id="footer"
      className="bg-secondary border-t border-gray-500 py-8 relative"
    >
      <div className="mx-auto w-full max-w-screen-3xl px-4">
        <div
          className="flex flex-col gap-4 lg:flex-row lg:w-10/12 2xl:w-full mx-auto text-center text-sm text-secondary lg:items-center lg:justify-between"
        >
          {/* Icônes sociales avec animation scale */}
          <div ref={socialIconsRef} className="will-change-transform">
            <SocialIcons
              aria-label="Liens vers les réseaux sociaux"
              iconSize="w-5 h-5"
              spaceBetween="space-x-6 lg:mb-0"
              iconClassName="text-card hover:text-card p-2 sm:p-3 bg-transparent hover:bg-card hover:text-secondary rounded-full border border-accent transition-bg duration-500 ease-in-out hover:opacity-95"
            />
          </div>

          {/* Texte du copyright + FooterLinks avec animation opacity */}
          <div ref={textRef} className="will-change-opacity">
            <CopyrightText className="text-xs font-poppins sm:text-center" />
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
