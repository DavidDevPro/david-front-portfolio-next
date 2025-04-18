"use client";

import { useEffect, useState } from "react";
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

interface NavBarDesktopPropsExtended extends NavBarDesktopProps {
  activeDuration?: number;
  inactiveDuration?: number;
  generalDuration?: number;
}

export const NavBarDesktop: React.FC<NavBarDesktopPropsExtended> = ({
  routes,
  activeDuration = 300,
  inactiveDuration = 300,
  generalDuration = 1000,
}) => {
  const pathname = usePathname();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {routes.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <NavigationMenuItem key={`section-${label}`}>
              <NavigationMenuLink asChild>
                <Link aria-label="navigation-button" href={href}>
                  <Button
                    aria-label="navigation-button"
                    variant="ghost"
                    className={`justify-start text-2xl font-poppins transition-all ease-out transform ${isActive
                      ? "text-accent hover:bg-accent hover:text-card"
                      : "text-card hover:bg-accent hover:text-card"} 
                      ${hasLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-90"}`}
                    style={{
                      willChange: "transform, opacity, scale",
                      transition: `opacity ${generalDuration}ms ease-out, transform ${generalDuration}ms ease-out, color ${isActive ? activeDuration : inactiveDuration}ms ease-out, background-color ${isActive ? activeDuration : inactiveDuration}ms ease-out`,
                    }}
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
