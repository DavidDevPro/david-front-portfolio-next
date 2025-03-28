"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showFormSuccess, showFormError } from "@/lib/notifications/toastMessages";
import { Form } from "@/components/ui/form";
import { loginUser } from "@/lib/api/authApi";
import Cookies from 'js-cookie';
import Link from "next/link";
import { MdOutlinePassword } from "react-icons/md";
import axios from "axios";
import { ButtonSubmit, PasswordInput, TextInput } from "@/components/shared/form";
import { FaHome, FaRegUser } from "react-icons/fa";
import { loginSchema } from "@/lib/schema/auth/formSchema";
import { LoginFormData } from "@/lib/types";
import { useAuthStore } from "@/lib/store";

export const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifiant: "",
      password: "",
    },
  });

  const { formState: { errors }, clearErrors } = form;

  useEffect(() => {
    const token = Cookies.get('authToken');
    const expirationTime = Cookies.get('authTokenExpiration');

    if (token && expirationTime && new Date().getTime() < parseInt(expirationTime)) {
      router.push("/admin");
    } else {
      Cookies.remove('authToken');
      Cookies.remove('authTokenExpiration');
    }
  }, [router]);

  const handleError = (error: unknown) => {
    console.error("Erreur lors de la connexion :", error);

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        showFormError("Identifiants incorrects. Veuillez vérifier votre identifiant et mot de passe.");
      } else if (error.response?.status === 403) {
        showFormError("Compte inactif, veuillez contacter l'administrateur.");
      } else {
        showFormError(error.response?.data?.message || "Erreur lors de la connexion.");
      }
    } else {
      showFormError("Une erreur inattendue est survenue lors de la connexion.");
    }
  };

  const { setToken, setUserInfo } = useAuthStore.getState();

  const onSubmit = async (values: LoginFormData) => {
    setLoading(true);

    try {
      const response = await loginUser(values);
      const data = response.data;

      setToken(data.token);
      setUserInfo({
        userRole: data.userRole,
        profilePicture: data.urlPictureProfil,
        identifiant: data.identifiant,
      });
      const expirationTime = new Date().getTime() + 3600 * 1000;
      Cookies.set('authToken', data.token, { expires: 1, secure: true });
      Cookies.set('authTokenExpiration', expirationTime.toString(), { expires: 1 });
      Cookies.set('userRole', data.userRole, { expires: 1 });
      Cookies.set('identifiant', data.identifiant, { expires: 1 });
      Cookies.set('userId', data.id.toString(), { expires: 1 });
      Cookies.set('profilePicture', data.urlPictureProfil, { expires: 1 });

      showFormSuccess("Connexion réussie avec succès !");
      router.push('/admin');

    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
        <div className="flex flex-col px-10 gap-4">
          <TextInput
            control={form.control}
            name="identifiant"
            label="Identifiant"
            placeholder="Votre identifiant"
            icon={FaRegUser}
            errors={errors}
            rules={{ required: "L'identifiant est requis" }}
            clearErrors={clearErrors}
            required={true}
            autoComplete="username"
            iconColor="text-primary"
          />

          <PasswordInput
            control={form.control}
            name="password"
            placeholder="Votre mot de passe"
            errors={errors}
            rules={{ required: "Le mot de passe est requis" }}
            clearErrors={clearErrors}
            required={true}
            autoComplete="current-password"
          />

          <div className="text-center text-sm mt-3 mb-4 flex flex-col items-center gap-2">
            <Link href="/forgot-password" className="text-primary font-bold hover:underline inline-flex items-center">
              <MdOutlinePassword className="h-5 w-5 mr-2 text-primary shrink-0" aria-hidden="true" />
              Mot de Passe Oublié ?
            </Link>

            <Link href="/" className="text-primary font-bold hover:underline inline-flex items-center">
              <FaHome className="h-5 w-5 mr-2 text-primary shrink-0" aria-hidden="true" />
              Accueil du site
            </Link>
          </div>

          <ButtonSubmit
            ariaLabel="Se Connecter"
            text="Se Connecter"
            isLoading={loading}
            className="h-16 hover:border-card hover:text-secondary hover:bg-primary/70 hover:scale-102 will-change-transform"
          />
        </div>
      </form>
    </Form>
  );
};
