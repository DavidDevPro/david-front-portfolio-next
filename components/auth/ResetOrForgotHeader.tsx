"use client";

import { TooltipLink } from "@/components/shared";

export const ResetOrForgotHeader = () => {
    return (
        <div className="flex justify-center mb-8 relative">
            {/* Icône de retour à gauche */}
            <TooltipLink
                href="/admin"
                ariaLabel="Retour vers le formulaire de connexion"
                tooltipText="Retour vers la page de connexion"
            />
        </div>
    );
};