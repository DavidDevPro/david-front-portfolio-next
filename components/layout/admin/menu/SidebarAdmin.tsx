"use client";

import { useEffect, useState } from 'react';
import { IconChevronsLeft, IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { Nav } from "@/components/layout/admin";
import { cn } from '@/lib/utils';
import { useSideLinks } from "@/config/routes/sidebarRoutes";
import { APP_NAME } from '@/config/config';
import { SidebarProps } from '@/lib/types/layoutDashboard';

export const SidebarAdmin: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
    const [navOpened, setNavOpened] = useState(false);
    const sidelinks = useSideLinks();

    // Gérer le scroll lorsque la navigation est ouverte
    useEffect(() => {
        if (navOpened) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [navOpened]);

    // Initialiser la sidebar en mode réduit
    useEffect(() => {
        setIsCollapsed(true); // Réduit par défaut
    }, [setIsCollapsed]);

    // Gérer l'état "collapsed" en fonction de la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsCollapsed(false); // Ouvert par défaut sur mobile (<768px)
            } else {
                setIsCollapsed(true); // Réduit par défaut sur tablette et desktop (≥768px)
            }
        };

        handleResize(); // Appliquer l'état par défaut au premier rendu
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize); // Nettoyer l'écouteur
    }, [setIsCollapsed]);

    return (
        <aside
            className={cn(
                `fixed left-0 top-0 z-50 w-full border-r-2 border-r-accent md:bottom-0 md:right-auto md:h-full`,
                isCollapsed ? 'md:w-14' : 'md:w-64'
            )}
        >
            {/* Contenu principal de la sidebar */}
            <div className={`bg-card h-full flex flex-col justify-between`}>
                {/* Header avec Logo et Nom */}
                <div className={cn("flex justify-center", { "": !isCollapsed })}>
                    <Link href="/" className="font-bold text-xl lg:text-xl flex items-center text-primary">
                        <div className="flex overflow-hidden">
                            <Image
                                src="/images/icons/graph.webp"
                                alt={`${APP_NAME} Logo`}
                                aria-label={`logo de l'application ${APP_NAME}`}
                                priority
                                loading="eager"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </Link>

                    {/* Toggle Button pour mobile */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden ml-auto"
                        aria-label="Toggle Navigation"
                        aria-controls="sidebar-menu"
                        aria-expanded={navOpened}
                        onClick={() => setNavOpened(!navOpened)}
                    >
                        {navOpened ? <IconX /> : <IconMenu2 />}
                    </Button>
                </div>

                {/* Navigation Links */}
                <Nav
                    id="sidebar-menu"
                    className={`bg-secondary/90 text-card flex-1 overflow-auto transition-all ${navOpened ? 'max-h-screen overflow-auto' : 'max-h-0 overflow-hidden'
                        } md:max-h-screen`}
                    closeNav={() => setNavOpened(false)}
                    isCollapsed={isCollapsed}
                    links={sidelinks}
                />

                {/* Toggle Button pour étendre/réduire la sidebar */}
                <Button
                    onClick={() => setIsCollapsed((prev) => !prev)}
                    size="icon"
                    variant="outline"
                    className="rounded-full border-accent absolute -right-5 top-1/2 z-50 hidden lg:inline-flex"
                >
                    <IconChevronsLeft
                        stroke={1.5}
                        className={`text-secondary h-5 w-5 ${isCollapsed ? 'rotate-180' : ''}`}
                    />
                </Button>
            </div>
        </aside>
    );
};
