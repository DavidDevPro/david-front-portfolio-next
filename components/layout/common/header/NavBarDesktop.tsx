"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NavBarDesktopProps } from "@/lib/types";

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({ routes }) => {
  const pathname = usePathname(); // Récupère l'URL actuelle

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {routes.map(({ href, label }) => {
          const isActive = pathname === href; // ✅ Déclaration ici

          return (
            <NavigationMenuItem key={`section-${label}`}>
              <NavigationMenuLink asChild>
                <Link aria-label="navigation-button" href={href}>
                  <Button
                    aria-label="navigation-button"
                    variant="ghost"
                    className={`justify-start text-2xl font-poppins transition-colors duration-300 ease-in-out ${isActive ? "text-accent" : "text-card hover:bg-accent hover:text-card"
                      }`}
                  >
                    {label}
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
