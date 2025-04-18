import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/config/apiConfig';
import { forgotPasswordApiSchema, resetPasswordApiSchema, passwordResponseSchema } from '@/lib/schema/password/apiSchema';
import { PasswordResponse } from '@/lib/schema/password/apiSchema';
import { ForgotPasswordData, ResetPasswordData, UpdatePasswordData } from '@/lib/types';

/**
 * Envoie une demande de réinitialisation du mot de passe à l'API Laravel.
 *
 * @param {ForgotPasswordData} forgotPasswordData - Les données nécessaires pour envoyer l'email de réinitialisation.
 * @returns {Promise<PasswordResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const forgotPassword = async (forgotPasswordData: ForgotPasswordData): Promise<PasswordResponse> => {
  const forgotPasswordUrl = `${apiUrl}/password/forgot`;

  // Valider les données avec Zod avant l'envoi
  const parsedData = forgotPasswordApiSchema.safeParse(forgotPasswordData);
  if (!parsedData.success) {
    throw new Error('Invalid forgot password data: ' + JSON.stringify(parsedData.error.format()));
  }

  try {
    const response: AxiosResponse<PasswordResponse> = await axios.post(forgotPasswordUrl, parsedData.data);

    // Valider la réponse de l'API avec Zod
    const parsedResponse = passwordResponseSchema.safeParse(response.data);
    if (!parsedResponse.success) {
      throw new Error('Invalid API response: ' + JSON.stringify(parsedResponse.error.format()));
    }

    return parsedResponse.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to send reset link:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Envoie les données de réinitialisation du mot de passe à l'API Laravel.
 *
 * @param {ResetPasswordData} resetData - Les données nécessaires pour réinitialiser le mot de passe.
 * @returns {Promise<PasswordResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const resetPassword = async (resetData: ResetPasswordData): Promise<PasswordResponse> => {
  const resetUrl = `${apiUrl}/password/reset`;

  // Valider les données avec Zod avant l'envoi
  const parsedData = resetPasswordApiSchema.safeParse(resetData);
  if (!parsedData.success) {
    throw new Error('Invalid reset password data: ' + JSON.stringify(parsedData.error.format()));
  }

  try {
    const response: AxiosResponse<PasswordResponse> = await axios.post(resetUrl, parsedData.data);

    // Valider la réponse de l'API avec Zod
    const parsedResponse = passwordResponseSchema.safeParse(response.data);
    if (!parsedResponse.success) {
      throw new Error('Invalid API response: ' + JSON.stringify(parsedResponse.error.format()));
    }

    return parsedResponse.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to reset password:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Vérifie le mot de passe actuel.
 *
 * @param {string} currentPassword - Mot de passe actuel de l'utilisateur.
 * @returns {Promise<boolean>} Retourne true si le mot de passe est correct, sinon false.
 */
export const verifyCurrentPassword = async (currentPassword: string): Promise<boolean> => {
  const verifyUrl = `${apiUrl}/password/verify-current`;
  try {
    const response: AxiosResponse<{ success: boolean }> = await axios.post(verifyUrl, { currentPassword });
    return response.data.success;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) throw new Error(error.response?.data?.message || error.message);
    throw new Error('An unexpected error occurred');
  }
};

/**
 * Met à jour le mot de passe d'un utilisateur.
 *
 * @param {UpdatePasswordData} updateData - Données contenant le mot de passe actuel et le nouveau mot de passe.
 * @returns {Promise<PasswordResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const updatePassword = async (updateData: UpdatePasswordData): Promise<PasswordResponse> => {
  const updateUrl = `${apiUrl}/password/update`;
  try {
    const response: AxiosResponse<PasswordResponse> = await axios.post(updateUrl, updateData);
    const parsedResponse = passwordResponseSchema.safeParse(response.data);
    if (!parsedResponse.success) throw new Error('Invalid API response');

    return parsedResponse.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) throw new Error(error.response?.data?.message || error.message);
    throw new Error('An unexpected error occurred');
  }
};
