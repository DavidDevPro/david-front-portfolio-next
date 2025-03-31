"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavBarDesktop, NavBarMobile } from "@/components/layout/common";
import { APP_NAME } from "@/config/config";
import { headerRoutes } from "@/config/routes/headerRoutes";

export const NavBar: React.FC = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Au chargement du composant, activer l'animation avec une légère latence
    setHasLoaded(true);
  }, []);

  return (
    <>
      <Link
        href="/"
        className={`font-medium font-montserrat text-2xl sm:text-4xl flex items-center text-accent transition-all duration-1000 ease-out transform ${hasLoaded
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-6 scale-95"
          }`}
        style={{
          willChange: "transform, opacity, scale", // Optimisation pour les propriétés utilisées dans l'animation
        }}
      >
        <Image
          src="/images/logos/logo.png"
          width={80}
          height={80}
          alt={`${APP_NAME} Logo`}
          priority
          aria-label={`logo de l'application ${APP_NAME}`}
          loading="eager"
          className="animate-floatingLogo w-full h-full mr-2 sm:mr-4 transition-all ease-out duration-500"
          style={{ animationDuration: "16s", willChange: "transform" }}
        />
        Portfolio
      </Link>

      {/* Mobile */}
      <NavBarMobile routes={headerRoutes} />

      {/* Desktop */}
      <NavBarDesktop routes={headerRoutes} />
    </>
  );
};


