"use client"

import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"
import { TooltipIconWrapperProps } from "@/lib/types"

export const TooltipIconWrapper = ({
    children,
    tooltip,
    onClick,
    className = "",
    isAdmin = true, // 👈 true par défaut pour l'admin
}: TooltipIconWrapperProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span
                        onClick={onClick}
                        className={`cursor-pointer flex justify-center items-center ${className}`}
                    >
                        {children}
                    </span>
                </TooltipTrigger>
                <TooltipContent className={isAdmin ? "admin-tooltip" : "portfolio-tooltip"}>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
