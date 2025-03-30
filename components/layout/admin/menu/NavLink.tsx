"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from "react";
import useCheckActiveNav from '@/hooks/use-check-active-nav';
import { NavLinkProps } from '@/lib/types/layoutDashboard';

// Lien simple sans sous-menu
export function NavLink({ title, icon, label, href, closeNav, subLink = false, badge, onClick }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav();
  const isActive = href ? checkActiveNav(href) : false;

  // 🔹 Stocke le badge dans un état local pour éviter l'erreur de SSR
  const [clientBadge, setClientBadge] = useState<number | null>(null);

  useEffect(() => {
    if (badge) {
      setClientBadge(badge()); // Met à jour le badge uniquement côté client
    }
  }, [badge]);

  const handleClick = async () => {
    if (onClick) {
      try {
        await onClick();
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    if (closeNav) {
      closeNav();
    }
  };

  return href ? (
    <Link href={href} passHref>
      <Button
        onClick={closeNav}
        variant="dashboardActif"
        size="sm"
        className={cn(
          'w-full h-12 justify-start text-wrap rounded-none px-6 transition-colors',
          isActive
            ? 'bg-accent text-background hover:bg-accent/90'
            : 'text-card bg-primary hover:bg-primary/70 hover:text-background',
          subLink && 'h-10 w-full border-l border-l-primary px-2'
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        <div className="mr-2">{icon}</div>
        <span className="flex-1">{title}</span>

        {/* 🔹 Le badge est affiché uniquement si la valeur client est chargée */}
        {clientBadge !== null && clientBadge > 0 && (
          <div className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {clientBadge}
          </div>
        )}

        {label && (
          <div className="ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-card">
            {label}
          </div>
        )}
      </Button>
    </Link>
  ) : (
    <Button
      onClick={handleClick}
      variant="ghost"
      size="sm"
      className={cn(
        'w-full h-12 bg-secondary justify-start text-wrap rounded-none px-6 transition-colors',
        'text-card hover:bg-secondary/70 hover:text-background',
        subLink && 'h-10 w-full border-l border-l-primary px-2'
      )}
    >
      <div className="mr-2">{icon}</div>
      <span className="flex-1">{title}</span>

      {/* 🔹 Le badge est affiché uniquement si la valeur client est chargée */}
      {clientBadge !== null && clientBadge > 0 && (
        <div className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {clientBadge}
        </div>
      )}

      {label && (
        <div className="ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-card">
          {label}
        </div>
      )}
    </Button>
  );
}