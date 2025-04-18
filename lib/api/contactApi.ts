import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/config/apiConfig'; 
import { ApiResponse } from '@/lib/schema/contact/apiSchema'; // Import du schéma d'API
import { ContactFormApi } from '@/lib/schema/contact/apiSchema'; // Import des types dérivés du schéma pour le formulaire

/**
 * Envoie les données du formulaire de contact à l'API Laravel et envoie un email.
 *
 * @param {ContactFormApi} contactData - Les données du formulaire de contact validées par Zod.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
const sendContactForm = async (contactData: ContactFormApi): Promise<ApiResponse> => {
  const contactUrl = `${apiUrl}/contact`;

  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(contactUrl, contactData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to send contact form:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

export default sendContactForm;