"use client";

import { CopyrightText, FooterLinks, SocialIcons } from "@/components/shared";

export const SiteFooter = () => {
  return (
    <footer
      id="footer"
      className="bg-secondary border-t border-gray-500 py-8 relative"
    >
      <div className="mx-auto w-full max-w-screen-3xl px-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:w-10/12 2xl:w-full mx-auto text-center text-sm text-secondary lg:flex lg:items-center lg:justify-between">
          <SocialIcons
            aria-label="Liens vers les réseaux sociaux"
            iconSize="w-5 h-5"
            spaceBetween="space-x-6 lg:mb-0"
            iconClassName="text-card hover:text-card p-2 sm:p-3 bg-transparent hover:bg-card hover:text-secondary rounded-full border border-accent transition-bg duration-500 ease-in-out hover:opacity-95 "
          />
          <div className="flex flex-col items-center">
            <CopyrightText className="text-xs font-poppins sm:text-center" />
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
