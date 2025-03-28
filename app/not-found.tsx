"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui";
import { PageLayoutErrorScreen } from "@/components/layout/common";
import { PrimaryButton } from "@/components/shared";
import { Badge } from "@/components/ui/badge";

const NotFoundPage = () => {
  return (
    <PageLayoutErrorScreen>
      <div className=" flex flex-col gap-4 items-center justify-center h-full px-6 py-12 text-center">
        <div className="max-w-md mx-auto flex flex-col gap-2 items-center">
          <Badge variant="outline" className="mb-4 text-sm text-card">
            Erreur 404
          </Badge>
          <h1 className="text-4xl font-extrabold text-accent md:text-5xl">
            Page non trouvée
          </h1>
          <p className="mt-4 text-background">
            {`Oups! Il semble que la page que vous recherchez n'existe pas ou a été déplacée.`}
          </p>
          <Separator className="my-8" />
          <Link href="/">
            <PrimaryButton
              aria-label="retour accueil"
              className="mt-4"
            >
              {`Retourner à l'accueil`}
            </PrimaryButton>
          </Link>
        </div>
        <div className="flex justify-center items-center w-full mt-12">
          <svg
            className="w-32 h-32 opacity-80 animate-bounce"
            fill="#a2d6f9"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM9 12a1 1 0 112-0 1 1 0 01-2 0zm4 0a1 1 0 112-0 1 1 0 01-2 0zM7 15s0-1 5-1 5 1H7z" />
          </svg>

        </div>
      </div>
    </PageLayoutErrorScreen>
  );
};

export default NotFoundPage;
