"use clients";
import { IconChevronDown } from '@tabler/icons-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import useCheckActiveNav from '@/hooks/use-check-active-nav';
import { NavLink } from './NavLink';
import { NavLinkDropdownProps } from '@/lib/types/admin/layoutDashboard';

export function NavLinkDropdown({ title, icon, label, sub, closeNav }: NavLinkDropdownProps) {
  const { checkActiveNav } = useCheckActiveNav();
  const isChildActive = !!sub?.find((s) => s.href && checkActiveNav(s.href));

  return (
    <Collapsible defaultOpen={isChildActive}>
      <CollapsibleTrigger
        className={cn(
          'group h-12 w-full justify-start rounded-none px-6 transition-colors hover:bg-primary hover:text-primary-foreground'
        )}
      >
        <div className="mr-2">{icon}</div>
        {title}
        {label && (
          <div className="ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground">
            {label}
          </div>
        )}
        <span className="ml-auto transition-all group-data-[state=open]:-rotate-180">
          <IconChevronDown stroke={1} />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="collapsibleDropdown" asChild>
        <ul>
          {sub.map((sublink) => (
            <li key={sublink.title} className="my-1 ml-8">
              <NavLink {...sublink} subLink closeNav={closeNav} />
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}