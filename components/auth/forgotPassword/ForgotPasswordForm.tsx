"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { showFormSuccess, showFormError } from "@/lib/notifications/toastMessages";
import { Form } from "@/components/ui/form";
import { RiMailSendLine } from "react-icons/ri";
import { forgotPassword } from "@/lib/api/passwordApi";
import { ResetOrForgotHeader } from "@/components/auth";
import axios from "axios";
import { ButtonSubmit, TextInput } from "@/components/shared/form";
import { FaRegEnvelope } from "react-icons/fa";
import { forgotPasswordSchema, ForgotPasswordFormInputs } from "@/lib/schema/password/formSchema";

export const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  // Utilisation du type exporté
  const form = useForm<ForgotPasswordFormInputs>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { formState: { errors }, clearErrors } = form;

  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data.message || "Erreur lors de l'envoi du lien de réinitialisation. Veuillez réessayer.";
      showFormError(errorMessage);
    } else {
      showFormError("Une erreur inattendue est survenue. Veuillez réessayer.");
    }
  };

  const onSubmit = async (values: ForgotPasswordFormInputs) => {
    setLoading(true);
    try {
      await forgotPassword({ email: values.email });
      showFormSuccess("Le lien de réinitialisation du mot de passe a été envoyé à votre adresse e-mail !");
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 sm:space-y-14">
        <ResetOrForgotHeader />
        
        <p className="mx-auto w-10/12 md:w-7/12 text-center text-base font-medium">
          Veuillez saisir votre email pour réinitialiser votre mot de passe.
        </p>

        <TextInput
          control={form.control}
          name="email"
          label="Email"
          placeholder="Entrez votre email"
          icon={FaRegEnvelope}
          type="email"
          errors={errors}
          rules={{ required: "L'email est requis" }}
          clearErrors={clearErrors}
          required={true}
        />

        <ButtonSubmit
          ariaLabel="Envoyer le lien de réinitialisation"
          icon={RiMailSendLine}
          text="Envoyer le lien de réinitialisation"
          isLoading={loading}
        />
      </form>
    </Form>
  );
};
