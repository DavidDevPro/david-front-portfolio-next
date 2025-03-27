import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { PrimaryButtonProps } from "@/lib/types";

export const PrimaryButton = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  PrimaryButtonProps
>(
  (
    {
      children,
      href,
      target,
      rel,
      className = "",
      isLoading = false,
      disabled = false,
      onClick,
      textColor = "text-card",
      bgColor = "bg-secondary/95",
      borderColor = "border-accent",
      gap = "gap-4",
      px = "px-6 md:px-8 lg:px-12", // Responsive padding
      py = "py-2 md:py-3 lg:py-4",
      fontFamily = "font-poppins",
      fontSize = "text-base md:text-lg lg:text-xl", // Taille adaptative
      fontWeight = "font-semibold",
      shadow = "shadow-sm ",
      rounded = "rounded-full",
    },
    ref
  ) => {
    const buttonClasses = cn(
      "relative flex items-center justify-center overflow-hidden transition-all duration-500 border",
      "disabled:opacity-50 disabled:pointer-events-none group",
      textColor,
      bgColor,
      borderColor,
      gap,
      px,
      py,
      fontFamily,
      fontSize,
      fontWeight,
      shadow,
      rounded
    );

    // Effet lumineux fluide
    const spinAnimation = (
      <span className="absolute inset-0 w-full h-full animate-spinSlow bg-gradient-to-r from-white/10 via-transparent to-white/10 pointer-events-none" />
    );

    const spinActive = (
      <span className="absolute top-1/2 -left-10 w-[120%] h-[80%] bg-gradient-to-r from-transparent via-card/10 to-transparent transform -translate-x-full -translate-y-1/2 rotate-[70deg] transition-transform duration-1000 ease-out group-hover:translate-x-full" />
    );

    if (href) {
      return (
        <Link
          href={href}
          passHref
          target={target}
          rel={rel}
          className={cn(buttonClasses, className)}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {spinAnimation}
          {spinActive}
          {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin shrink-0" />}
          <span className={cn("relative flex items-center", gap)}>{children}</span>
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={cn(buttonClasses, className)}
      >
        {spinAnimation}
        {spinActive}
        {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin shrink-0" />}
        <span className={cn("relative flex items-center", gap)}>{children}</span>
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";


