"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { showFormSuccess, showFormError } from "@/lib/notifications/toastMessages";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { resetPassword } from "@/lib/api/passwordApi";
import { ResetOrForgotHeader } from "@/components/auth";
import axios from "axios";
import { ButtonSubmit, PasswordInput } from "@/components/shared/form";
import { ResetPasswordFormInputs } from "@/lib/types";
import { resetPasswordSchema } from "@/lib/schema/password/formSchema";
import { useRouter } from "next/navigation";

export const ResetPasswordForm = ({ token, email }: { token?: string; email?: string; }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<ResetPasswordFormInputs>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { formState: { errors }, clearErrors } = form;

  // Fonction pour gérer les erreurs
  const handleError = (error: unknown) => {
    console.error("Erreur lors de la réinitialisation du mot de passe :", error);

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        showFormError("Token invalide ou expiré."); // Message pour le statut 400
      } else if (error.response?.status === 403) {
        showFormError("Compte inactif. Veuillez contacter l'administrateur."); // Message pour le statut 403
      } else if (error.response?.status === 404) {
        showFormError("Utilisateur non trouvé."); // Message pour le statut 404
      } else {
        showFormError(error.response?.data?.message || "Erreur lors de la réinitialisation du mot de passe."); // Message générique
      }
    } else {
      showFormError("Une erreur inattendue est survenue lors de la réinitialisation du mot de passe."); // Message pour les erreurs non Axios
    }
  };

  // Gestionnaire de soumission du formulaire
  const onSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
    setLoading(true); // Indiquer que le chargement commence

    // Vérifier que token et email sont définis
    if (!token || !email) {
      showFormError("Token ou email manquant.");
      setLoading(false);
      return;
    }

    try {
      await resetPassword({
        token: token, // Utilisation du token passé au composant
        email: email, // Utilisation de l'email décodé
        password: values.password,
        confirmPassword: values.confirmPassword,
      });

      showFormSuccess("Votre mot de passe a été réinitialisé avec succès !");
      // ✅ Redirection après succès
      setTimeout(() => {
        router.push("/");
      }, 2000); // Redirection après 2 secondes pour laisser le temps de voir le message
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-full">
        {/* Logo et titre */}
        <ResetOrForgotHeader />

        <p className="mx-auto w-10/12 text-center text-base font-medium">
          Veuillez saisir votre nouveau mot de passe.
        </p>

        {/* Champ Mot de Passe */}
        <PasswordInput
          control={form.control}
          name="password"
          placeholder="Nouveau mot de passe"
          errors={errors}
          rules={{ required: "Le nouveau mot de passe est requis" }}
          clearErrors={clearErrors}
          required={true}
        />

        {/* Champ Mot de Passe de confirmation */}
        <PasswordInput
          control={form.control}
          name="confirmPassword"
          placeholder="Confirmer votre mot de passe"
          errors={errors}
          rules={{ required: "La confirmation du nouveau mot de passe est requise" }}
          clearErrors={clearErrors}
          required={true}
        />

        {/* Bouton de soumission */}
        <ButtonSubmit
          ariaLabel="Réinitialiser le mot de passe"
          text="Réinitialiser le mot de passe"
          isLoading={loading}
          className="h-16 hover:border-card hover:text-secondary hover:bg-primary/70 hover:scale-102 will-change-transform"
        />
      </form>
    </Form>
  );
};
