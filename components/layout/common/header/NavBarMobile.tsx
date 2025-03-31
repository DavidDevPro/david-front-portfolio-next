"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, Separator } from "@/components/ui";
import { CgMenuRight } from "react-icons/cg";
import { CopyrightText, FooterLinks, SocialIcons } from "@/components/shared";
import { APP_NAME } from "@/config/config";
import { NavBarMobileProps } from "@/lib/types";

export const NavBarMobile: React.FC<NavBarMobileProps> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ Récupère l'URL actuelle

  const handleMenuToggle = (open: boolean) => {
    setIsOpen(open);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu après un clic
  };


  return (
    <div className="flex items-center lg:hidden">
      <Sheet open={isOpen} onOpenChange={handleMenuToggle}>
        <SheetTrigger asChild>
          <button
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-label="Ouvrir le menu de navigation"
          >
            <CgMenuRight
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-accent h-12 w-12 shrink-0"
            />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col justify-between items-center bg-secondary w-full max-w-screen h-full max-h-screen overflow-y-auto overflow-x-hidden px-1"
        >
          <div className="w-full flex flex-col pt-10 gap-24 items-center">
            <SheetHeader className="flex items-center w-full">
              <SheetTitle className="flex items-center mb-4">
                <SheetDescription className="sr-only">
                  {`Menu principal du site, utilisez ce menu pour naviguer entre les différentes sections.`}
                </SheetDescription>
                <Link
                  href="/"
                  className="flex items-center text-accent font-montserrat gap-2 font-medium text-4xl "
                >
                  <Image
                    src="/images/logos/logo.png"
                    width={80}
                    height={80}
                    alt={`${APP_NAME} Logo`}
                    priority
                    aria-label={`Logo de l'application ${APP_NAME}`}
                    loading="eager"
                    className="animate-floatingLogo w-16 h-16 mr-2"
                    style={{ animationDuration: "16s" }}
                  />
                  Portfolio
                </Link>
              </SheetTitle>
            </SheetHeader>

            {/* Liens de navigation */}
            <div className="flex flex-col gap-8 items-center w-full">
              {routes.map(({ href, label }) => {
                const isActive = pathname === href; // ✅ Détection du lien actif

                return (
                  <Button
                    key={`section-${label}`}
                    asChild
                    variant="ghost"
                    className={`justify-center font-medium text-2xl w-full transition-colors duration-300 ease-in-out ${isActive ? "text-accent" : "text-card hover:bg-accent hover:text-card"
                      }`}
                  >
                    <Link href={href} onClick={handleLinkClick}>
                      {label}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          <SheetFooter className="flex flex-col gap-8">
            <Separator className="w-full bg-accent" />
            <div className="text-center text-xs text-gray-500 w-full">
              <SocialIcons
                iconSize="w-6 h-6 shrink-0"
                spaceBetween="space-x-4 sm:space-x-6"
                containerClassName="mb-6"
                aria-label="icones pour les réseaux sociaux"
                iconClassName="text-card hover:text-secondary p-2 sm:p-3 bg-secondary hover:bg-card hover:text-secondary rounded-full border border-accent transition-bg duration-500 ease-in-out hover:opacity-95"
              />
              <CopyrightText className="text-xs font-normal lg:text-center" />
              <FooterLinks />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

