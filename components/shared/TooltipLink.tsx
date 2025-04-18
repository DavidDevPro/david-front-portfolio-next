"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { TooltipLinkProps } from "@/lib/types";

export const TooltipLink = ({
  href,
  ariaLabel,
  tooltipText,
  icon = <FaArrowLeft className="h-6 w-6 shrink-0" />, // Icône par défaut
}: TooltipLinkProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            aria-label={ariaLabel}
            className="absolute top-0 left-0 p-2 text-primary hover:text-primary-dark transition"
          >
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
