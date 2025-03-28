"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import useCheckActiveNav from '@/hooks/use-check-active-nav';
import { NavLinkIconProps } from '@/lib/types';

// Lien simple sans sous-menu
export function NavLinkIcon({ title, icon, label, href, closeNav, onClick }: NavLinkIconProps) {
  const { checkActiveNav } = useCheckActiveNav();
  const isActive = checkActiveNav(href);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    closeNav(); // Fermer le menu après le clic
  };

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        {title === "Déconnexion" ? (
          <Button
            onClick={handleClick}
            variant={isActive ? 'default' : 'ghost'}
            size="icon"
            className={`relative h-12 w-12 transition-colors ${isActive ? 'bg-destructive-foreground text-background' : 'text-background hover:bg-destructive-foreground hover:text-background'}`}
          >
            {icon}
            <span className="sr-only">{title}</span>
          </Button>
        ) : (
          <Link href={href} onClick={closeNav}>
            <Button
              variant={isActive ? 'dashboard' : 'ghost'}
              size="icon"
              className={`relative h-12 w-12 transition-colors ${isActive ? 'bg-destructive-foreground text-background' : 'text-background hover:bg-destructive-foreground hover:text-background'}`}
            >
              {icon}
              <span className="sr-only">{title}</span>
            </Button>
          </Link>
        )}
      </TooltipTrigger>
      <TooltipContent side="right" className="text-card bg-primary flex items-center gap-4">
        {title}
        {label && <span className="ml-auto text-card">{label}</span>}
      </TooltipContent>
    </Tooltip>
  );
}
