"use client";

import Link from "next/link";
import Image from "next/image";
import { NavBarDesktop, NavBarMobile } from "@/components/layout/common";
import { APP_NAME } from "@/config/config";
import { headerRoutes } from "@/config/routes/headerRoutes";

export const NavBar: React.FC = () => {
  return (
    <>
      <Link
        href="/"
        className="font-medium font-montserrat text-2xl sm:text-4xl flex items-center text-accent transition-text ease duration-300"
      >
        <Image
          src="/images/logos/logo.png"
          width={80}
          height={80}
          alt={`${APP_NAME} Logo`}
          priority
          aria-label={`logo de l'application ${APP_NAME}`}
          loading="eager"
          className="animate-floatingLogo w-full h-full mr-2 sm:mr-4 transition-w-h ease duration-300"
          style={{ animationDuration: "16s" }}
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
