"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Loader } from "lucide-react";
import { PrimaryButtonProps } from "@/lib/types";

// Styles par variante
const variants = {
  primaryPortfolio: cn(
    "group relative w-auto flex items-center justify-center gap-2 overflow-hidden text-sm font-semibold tracking-wide",
    "transform-gpu ring-offset-current transition-all duration-300 ease-out",
    "bg-card text-primary border-2 border-primary",
    "hover:bg-primary hover:text-card hover:ring-2 hover:ring-primary hover:ring-offset-2",
    "px-6 py-4 rounded-md shadow-md shadow-gray-500/50"
  ),
  secondaryPortfolio: cn(
    "group relative w-auto flex items-center justify-center gap-2 overflow-hidden text-sm font-semibold tracking-wide",
    "transform-gpu ring-offset-current transition-all duration-300 ease-out",
    "border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700",
    "hover:from-gray-700 hover:to-gray-600 hover:ring-2 hover:ring-from-gray-700 hover:ring-to-gray-600 hover:ring-offset-2",
    "px-6 py-4 rounded-md shadow-md shadow-gray-500/50"
  ),
  primaryAdmin: cn(
    "group relative w-auto flex items-center justify-center gap-2 overflow-hidden text-sm font-semibold tracking-wide text-card",
    "transform-gpu ring-offset-current transition-all duration-300 ease-out",
    "bg-primary hover:ring-2 hover:ring-primary hover:ring-offset-2",
    "px-8 py-5 rounded-md"
  ),
  secondaryAdmin: cn(
    "group relative w-auto flex items-center justify-center gap-2 overflow-hidden text-sm font-semibold tracking-wide",
    "transform-gpu ring-offset-current transition-all duration-300 ease-out",
    "bg-card text-primary border-2 border-primary",
    "hover:bg-primary hover:text-card hover:ring-2 hover:ring-primary hover:ring-offset-2",
    "px-6 py-4 rounded-md"
  ),
};

export const PrimaryButton = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  PrimaryButtonProps
>(
  (
    {
      isLoading = false,
      children,
      onClick,
      disabled = false,
      variant = "primaryPortfolio",
      className,
      href,
      target,
      rel,
      type,
      ...props
    },
    ref
  ) => {
    const selectedClasses = variants[variant];
    const buttonClasses = cn(
      selectedClasses,
      "whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10",
      className
    );

    const animationSpan = (
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-card opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
    );

    // Cas lien
    if (href) {
      return (
        <Link href={href} passHref legacyBehavior>
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={buttonClasses}
            target={target}
            rel={rel}
            {...props}
          >
            {animationSpan}
            {isLoading ? (
              <Loader
                className="mr-2 h-4 w-4 animate-spin shrink-0"
                aria-hidden="true"
              />
            ) : (
              <span className="flex items-center">{children}</span>
            )}
          </a>
        </Link>
      );
    }

    // Cas bouton
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type ?? "button"}
        onClick={onClick}
        aria-disabled={disabled || isLoading}
        disabled={disabled || isLoading}
        className={buttonClasses}
        {...props}
      >
        {animationSpan}
        {isLoading ? (
          <Loader
            className="mr-2 h-4 w-4 animate-spin shrink-0"
            aria-hidden="true"
          />
        ) : (
          <span className="flex items-center">{children}</span>
        )}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";
