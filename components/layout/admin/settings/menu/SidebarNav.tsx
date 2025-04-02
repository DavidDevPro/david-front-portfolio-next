"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { SidebarNavProps } from '@/lib/types';

export const SidebarNav: React.FC<SidebarNavProps> = ({ items }) => {
    const pathname = usePathname(); // Récupère le chemin actuel sans utiliser useRouter
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

    useEffect(() => {
        // Par défaut, si on est sur "/settings", on sélectionne "Profile"
        if (pathname === "/dashboard/settings") {
            setSelectedValue(items[0]?.href); // Sélectionne le premier lien ("Profile")
        } else {
            setSelectedValue(pathname ?? items[0]?.href); // Sinon, initialise avec le pathname actuel
        }
    }, [pathname, items]);

    const handleSelect = (e: string) => {
        setSelectedValue(e);
        // Utilise Link pour la navigation dans Next.js
    };

    return (
        <>
            {/* Version mobile avec un Select */}
            <div className='p-1 md:hidden'>
                <Select value={selectedValue} onValueChange={handleSelect}>
                    <SelectTrigger className='h-12 sm:w-48'>
                        <SelectValue placeholder='Select an option' />
                    </SelectTrigger>
                    <SelectContent>
                        {items.map((item) => (
                            <SelectItem key={item.href} value={item.href}>
                                <div className='flex gap-x-4 px-2 py-1'>
                                    <span className='scale-125'>{item.icon}</span>
                                    <span className='text-md'>{item.title}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Version desktop avec les liens */}
            <div className='bg-card hidden w-full overflow-x-auto px-1 md:block'>
                <nav className='flex space-x-2 justify-center 2xl:flex-col 2xl:space-x-0 2xl:space-y-1'>
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href} // Utilise href pour le lien dans Next.js
                            className={cn(
                                buttonVariants({ variant: 'ghost' }),
                                selectedValue === item.href ? 'bg-primary text-card' : 'hover:bg-primary hover:text-card',
                                'justify-start flex items-center',
                                selectedValue === item.href ? 'text-card' : 'text-primary' // Ajoute `text-card` lorsque sélectionné
                            )}
                            onClick={() => setSelectedValue(item.href)} // Gère la sélection manuellement
                        >
                            <span className='mr-2'>{item.icon}</span>
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
