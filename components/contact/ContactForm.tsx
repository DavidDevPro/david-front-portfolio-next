"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { LuMessageSquare } from "react-icons/lu";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import sendContactForm from "@/lib/api/contactApi";
import { showFormSuccess, showFormError } from "@/lib/notifications/toastMessages";
import axios from "axios";
import { ButtonSubmit, CommentTextArea, TextInput } from "@/components/shared/form";
import { Checkbox } from "@/components/ui";
import { contactFormSchema, MIN_CHAR_COUNT, MAX_CHAR_COUNT } from "@/lib/schema/contact/formSchema";
import { ContactFormApi } from "@/lib/types";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  });
  const { control, formState: { errors }, clearErrors } = form;

  // Fonction pour gérer les erreurs
  const handleFormError = (error: unknown) => {
    console.error("Erreur lors de l'envoi du formulaire de contact :", error);

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        showFormError("Données invalides. Veuillez vérifier les champs du formulaire.");
      } else if (error.response?.status === 500) {
        showFormError("Erreur serveur. Veuillez réessayer plus tard.");
      } else {
        showFormError(error.response?.data?.message || "Erreur lors de l'envoi du formulaire.");
      }
    } else {
      showFormError("Une erreur inattendue est survenue lors de l'envoi du formulaire.");
    }
  };

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setLoading(true);

    const formDataWithSite: ContactFormApi = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
      consent: values.consent,
      namewebsite: "https://portfolio.davidwebprojects.fr",
    };

    try {
      await sendContactForm(formDataWithSite);
      form.reset();  // Réinitialise le formulaire
      setMessageLength(0);  // Réinitialise la longueur du message
      showFormSuccess("Votre message a été envoyé avec succès !");
    } catch (error) {
      handleFormError(error);  // Gérer les erreurs avec la fonction dédiée
    } finally {
      setLoading(false);  // Réinitialise l'état de chargement
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-10/12 space-y-6 p-2 md:p-4"
      >
        <div className="flex flex-col gap-4">
          {/* Champ prenom */}
          <TextInput
            control={control}
            name="firstName"
            label="Prénom"
            placeholder="Votre prénom ..."
            icon={FaRegUser}
            errors={errors}
            rules={{ required: "Prénom est requis" }}
            clearErrors={clearErrors}
            required={true}
          />
          {/* Champ Nom */}
          <TextInput
            control={control}
            name="lastName"
            label="Nom"
            placeholder="Votre nom ..."
            icon={FaRegUser}
            errors={errors}
            rules={{ required: "Nom est requis" }}
            clearErrors={clearErrors}
            required={true}
          />
          {/* Champ Email */}
          <TextInput
            control={control}
            name="email"
            label="Email"
            placeholder="Votre email ..."
            icon={FaRegEnvelope}
            type="email"
            errors={errors}
            rules={{
              required: "Email est requis",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Adresse email invalide",
              },
            }}
            clearErrors={clearErrors}
            required={true}
          />
          {/* Téléphone */}
          <TextInput
            control={control}
            name="phone"
            label="Téléphone"
            placeholder="Votre téléphone ..."
            icon={FiPhone}
            type="tel"
            errors={errors}
            rules={{
              required: "Téléphone est requis",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Le numéro de téléphone doit comporter 10 chiffres",
              },
            }}
            clearErrors={clearErrors}
            required={true}
          />
        </div>
        {/* Sujet */}
        <TextInput
          control={control}
          name="subject"
          label="Sujet"
          placeholder="Le sujet de votre demande ..."
          icon={LuMessageSquare}
          errors={errors}
          rules={{ required: "Le Sujet est requis" }}
          clearErrors={clearErrors}
          required={true}
        />
        {/* Message avec limitation de caractères */}
        <CommentTextArea
          control={form.control}
          name="message"
          label="Message"
          charCount={messageLength}
          maxCharCount={MAX_CHAR_COUNT}
          errors={form.formState.errors}
          handleCommentChange={(e) => setMessageLength(e.target.value.length)}
          placeholder="Votre message ..."
          textareaClassName="min-h-[200px]"
          rules={{
            required: "Le message est requis",
            minLength: {
              value: MIN_CHAR_COUNT,
              message: `Le message doit comporter au moins ${MIN_CHAR_COUNT} caractères.`,
            },
            maxLength: {
              value: MAX_CHAR_COUNT,
              message: `Le message ne doit pas dépasser ${MAX_CHAR_COUNT} caractères.`,
            },
          }}
          clearErrors={form.clearErrors}
          required={true}
        />
        {/* Consentement */}
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem>
              {/* Utilisation d'un wrapper div avec role="group" */}
              <label className="flex items-center space-x-2 mt-10 lg:mt-16 text-sm">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-label="Accepter le traitement des informations personnelles"
                    className="h-4 w-4"
                    aria-required="true"
                  />
                </FormControl>
                <p className="text-secondary">
                  {`J'accepte de soumettre mes informations personnelles via ce formulaire`}
                  <span className="ml-1 text-red-700">*</span>
                </p>
                <FormDescription className="sr-only">
                  {`Cochez cette case pour accepter les conditions et poursuivre`}
                </FormDescription>
              </label>
              <FormMessage className="text-red-600 mt-2" />
            </FormItem>
          )}
        />
        {/* Bouton de soumission */}
        <div>
          <ButtonSubmit
            ariaLabel="Envoyer le formulaire de contact"
            text="Envoyer"
            isLoading={loading}
            className=" hover:border-card hover:text-secondary hover:bg-primary/70 bg-[#182642]"
          />
        </div>
      </form>
    </Form>
  );
}
