"use client";

import { FC } from "react";
import { PrimaryButton } from "@/components/shared"; // Ajustez l'import en fonction de votre structure
import { ButtonSubmitProps } from "@/lib/types";

import { cn } from "@/lib/utils"; // Assure-toi d'importer la fonction de gestion des classes
import Image from "next/image";

export const ButtonSubmit: FC<ButtonSubmitProps> = ({
  ariaLabel,
  text,
  isLoading,
  onClick,
  className,
}) => {
  return (
    <div className="flex justify-center mb-4">
      <PrimaryButton
        variant="thirdPortfolio"
        className={cn(className)} // 🔥 Passe correctement la classe dynamique ici !
        aria-label={ariaLabel}
        disabled={isLoading}
        isLoading={isLoading}
        onClick={onClick}
        {...(onClick ? {} : { type: "submit" })}
      >
        <Image
          src="/images/icons/submit.png"
          alt={"image d'envoi de mail"}
          width={80}
          height={80}
          loading="eager"
          priority
          className="animate-contactLogo mr-2 shrink-0 w-[35px] h-[35px]"
          style={{ animationDuration: "10s" }} />
        {text}
      </PrimaryButton>
    </div>
  );
};

