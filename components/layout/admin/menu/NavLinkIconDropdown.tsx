import { IconChevronDown } from '@tabler/icons-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import useCheckActiveNav from '@/hooks/use-check-active-nav';
import Link from 'next/link';
import { NavLinkIconDropdownProps } from '@/lib/types/admin/layoutDashboard';

export function NavLinkIconDropdown({ title, icon, label, sub, closeNav }: NavLinkIconDropdownProps) {
  const { checkActiveNav } = useCheckActiveNav();
  const isChildActive = !!sub?.find((s) => s.href && checkActiveNav(s.href));

  return (
    <DropdownMenu>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isChildActive ? 'default' : 'ghost'}
              size="icon"
              className="h-18 w-18 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {icon}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-4">
          {title}
          {label && <span className="ml-auto text-muted-foreground">{label}</span>}
          <IconChevronDown size={18} className="-rotate-90 text-muted-foreground" />
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent side="right" align="start" sideOffset={4}>
        <DropdownMenuLabel>
          {title} {label ? `(${label})` : ''}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sub.map(({ title, icon, href }) => (
          href ? ( // Vérifie que href est défini avant de continuer
            <DropdownMenuItem key={`${title}-${href}`} asChild>
              <Link href={href} passHref>
                <Button
                  variant="ghost"
                  size="sm"
                  className={checkActiveNav(href) ? 'bg-primary' : 'hover:bg-primary hover:text-primary-foreground'}
                  onClick={closeNav}
                >
                  {icon}
                  <span className="ml-2 max-w-52 text-wrap">{title}</span>
                </Button>
              </Link>
            </DropdownMenuItem>
          ) : null // Si href est undefined, rien n'est rendu
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
