"use client";


import { settingsLinks } from "@/config/routes/settingsRoutes";
import { Card, CardContent } from "@/components/ui/card"; // Importation des composants Card
import { PageLayoutProps } from "@/lib/types";
import { SidebarNav } from "./menu/SidebarNav";


export const PageLayoutSettingsScreen: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="w-full h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm p-4">
            {/* Titre et description au-dessus du Sidebar */}
            <div className="mb-4 ">
                <h1 className="text-2xl text-primary font-bold tracking-tight md:text-3xl">Paramètres</h1>
                <p className="text-secondary">Configurer vos paramètres</p>
            </div>
            {/* Contenu avec Sidebar et Main, encapsulé dans un Card */}
            <Card className=" p-4 flex flex-col">
                <CardContent className="p-0 py-6 flex flex-1 pt-2 space-x-2 h-full flex-col gap-4 2xl:gap-0 2xl:flex-row">
                    {/* Sidebar spécifique à Settings */}
                    <aside className="h-full 2xl:max-w-1/4">
                        <SidebarNav items={settingsLinks} />
                    </aside>

                    {/* Section Content */}
                    <section className="flex-1">
                        {children}
                    </section>
                </CardContent>
            </Card>
        </div>
    );
};