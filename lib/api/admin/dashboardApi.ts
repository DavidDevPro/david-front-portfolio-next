import axios, { AxiosResponse } from "axios";
import { apiUrl } from "@/config/apiConfig";
import { AdminDashboardResponseSchema } from "@/lib/schema/admin/dashboard/apiSchema";
import { AdminDashboardData } from "@/lib/types/admin/dashboard/dashboard";

export const fetchAdminDashboardData = async (token: string): Promise<AdminDashboardData> => {
    const url = `${apiUrl}/admin/dashboard`;

    try {
        const response: AxiosResponse<unknown> = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });

        const parsed = AdminDashboardResponseSchema.safeParse(response.data);

        if (!parsed.success) {
            console.error("Erreur de validation du dashboard admin :", parsed.error);
            throw new Error("Format de données invalide pour le dashboard admin");
        }

        return parsed.data.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Erreur API /admin/dashboard :", error.response?.data || error.message);
            throw new Error(error.response?.data.message || error.message);
        } else {
            console.error("Erreur inattendue :", error);
            throw new Error("Une erreur inattendue est survenue lors du chargement du dashboard admin");
        }
    }
};
