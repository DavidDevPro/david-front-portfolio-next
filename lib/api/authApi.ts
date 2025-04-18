import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/config/apiConfig';
import { loginApiResponseSchema, logoutApiResponseSchema } from '@/lib/schema/auth/apiSchema';
import { LoginFormData, LoginResponse, LogoutResponse } from '@/lib/types/auth/auth';
import Cookies from 'js-cookie';

/**
 * Envoie les données du formulaire de connexion à l'API Laravel.
 *
 * @param {LoginFormData} loginData - Les données du formulaire de connexion.
 * @returns {Promise<LoginResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const loginUser = async (loginData: LoginFormData): Promise<LoginResponse> => {
  const loginUrl = `${apiUrl}/login`;

  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(loginUrl, loginData);
    console.log("Réponse reçue:", response); // 🔍 Debug ici

    const parsedResponse = loginApiResponseSchema.safeParse(response.data);
    if (!parsedResponse.success) {
      throw new Error('Invalid login API response: ' + JSON.stringify(parsedResponse.error.format()));
    }

    return parsedResponse.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to login:", error.response?.data || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error;
  }
};

/**
 * Envoie la requête de déconnexion à l'API Laravel.
 *
 * @returns {Promise<LogoutResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const logoutUser = async (): Promise<LogoutResponse> => {
  const logoutUrl = `${apiUrl}/logout`;

  // Récupérer le token d'authentification depuis les cookies
  const token = Cookies.get('authToken');

  if (!token) {
    throw new Error('Token non trouvé, l\'utilisateur n\'est probablement pas authentifié.');
  }

  try {
    const response: AxiosResponse<LogoutResponse> = await axios.post(logoutUrl, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // ✅ Valider la réponse de l'API avec Zod
    const parsedResponse = logoutApiResponseSchema.safeParse(response.data);
    if (!parsedResponse.success) {
      throw new Error('Invalid logout API response: ' + JSON.stringify(parsedResponse.error.format()));
    }

    // ✅ On nettoie les cookies utilisateur
    ['authToken', 'authTokenExpiration', 'userRole', 'identifiant', 'userId', 'profilePicture'].forEach((cookie) => {
      Cookies.remove(cookie);
    });

    // ✅ On retourne la réponse validée et typée
    return parsedResponse.data; // On retourne la totalité de la réponse validée
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to logout:", error.response?.data || error.message);

      if (error.response?.status === 401) {
        throw new Error('Session expirée ou non autorisée. Veuillez vous reconnecter.');
      }

      throw error;
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('Une erreur inattendue est survenue lors de la déconnexion.');
    }
  }
};