"use client";

import { NavLink } from './NavLink';
import { NavLinkDropdown } from './NavLinkDropdown';
import { NavLinkIcon } from './NavLinkIcon';
import { NavLinkIconDropdown } from './NavLinkIconDropdown';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { NavProps, SideLink } from '@/lib/types/layoutDashboard';

export function Nav({ links, isCollapsed, className, closeNav }: NavProps) {
  const renderLink = ({ sub, href, onClick, ...rest }: SideLink) => {
    const key = `${rest.title}-${href || ''}`; // Fournir une valeur par défaut si href est undefined
    // Si closeNav est requis partout, assurez-vous qu'il est fourni ici
    if (!closeNav) {
      console.error('closeNav is not provided');
      return null;
    }

    // Si le menu est réduit et qu'il y a un sous-menu
    if (isCollapsed && sub) {
      return <NavLinkIconDropdown {...rest} sub={sub} key={key} closeNav={closeNav} />;
    }

    // Si le menu est réduit mais sans sous-menu
    if (isCollapsed) {
      return <NavLinkIcon {...rest} key={key} href={href || ''} closeNav={closeNav} onClick={onClick} />;
    }

    // Si le menu n'est pas réduit et qu'il y a un sous-menu
    if (sub) {
      return <NavLinkDropdown {...rest} sub={sub} key={key} closeNav={closeNav} />;
    }

    // Lien simple sans sous-menu
    return <NavLink {...rest} key={key} href={href || ''} closeNav={closeNav} onClick={onClick} />;
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className={cn('group border-b bg-background md:py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:md:py-2 md:border-none', className)}
    >
      <TooltipProvider delayDuration={0}>
        <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map(renderLink)}
        </nav>
      </TooltipProvider>
    </div>
  );
}
