"use client";

import React from "react";
import { LoginForm, ForgotPasswordForm, LoginHeader, ResetPasswordForm } from "@/components/auth";
import { APP_NAME } from "@/config/config";
import { AuthSectionProps } from "@/lib/types";
import { CopyrightText } from "@/components/shared";
import Image from "next/image";


export const AuthSection = ({ formType, token, email }: AuthSectionProps) => {
  const getTitle = () => {
    switch (formType) {
      case "login":
        return "Connexion";
      case "forgot-password":
        return "Mot de passe oublié";
      case "reset-password":
        return "Réinitialisation du mot de passe";
      default:
        return "Authentification";
    }
  };

  return (
    <div className="flex h-screen w-full p-6">
      <div className="flex w-full group bg-secondary/95 border border-gray-400 overflow-hidden rounded-3xl shadow-lg shadow-gray-400/50">
        {/* Section gauche */}
        <div className="relative z-0 bg-fixed before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/50 before:via-[#192846]/65 before:to-[#192846]/90 w-1/2 flex justify-center items-center ">
          {/* Titre sur l'image */}
          <div className="absolute z-20 bg-secondary/85 px-6 py-3 rounded-xl shadow-sm shadow-gray-300/50 border-gray-300 ">
            <h2 className="text-4xl font-bold text-primary text-center">Administration</h2>
            <p className="text-lg text-card mt-4 text-center">Portfolio David Web Projects.</p>
          </div>

          {/* Image de fond assombrie */}
          <Image
            src="/images/img/admin.jpg"
            alt={`${APP_NAME} - Image de la page de connexion`}
            width={1618}
            height={1080}
            className="w-full h-full object-cover object-center "
            priority
          />
        </div>
        {/* Section droite */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10 ">
          <h1 className="text-4xl font-bold text-primary mb-6 text-center">{getTitle()}</h1>
          <p className="text-lg text-card text-center mb-8 ">{`Accédez à l'interface d'administration.`}</p>

          <div className="w-full max-w-md bg-background py-10 px-8 rounded-xl shadow-gray-300/50 border-gray-300 shadow-sm">
            <LoginHeader />
            {formType === "login" && <LoginForm />}
            {formType === "forgot-password" && <ForgotPasswordForm />}
            {formType === "reset-password" && (
              <ResetPasswordForm token={token} email={email} />
            )}

            {/* Copyright */}
            <div className="mt-6 text-center text-sm text-card-foreground leading-tight">
              <CopyrightText className="text-primary text-sm font-normal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
