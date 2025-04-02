import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { fetchAdminDashboardData } from "@/lib/api/admin/dashboardApi";
import { AxiosError } from "axios";
import { DashboardStore } from "../types/admin/dashboard";

export const useDashboardStore = create<DashboardStore>()(
    persist(
        (set, get) => ({
            projects: [],
            metadata: {
                technologies: [],
                features: [],
                types: [],
                tags: [],
            },
            dashboardLoaded: false,
            loading: false,
            error: null,

            fetchDashboardData: async (token: string, forceUpdate = false) => {
                const state = get();

                if (state.dashboardLoaded && !forceUpdate) return;

                set({ loading: true, error: null });

                try {
                    const data = await fetchAdminDashboardData(token);

                    set({
                        projects: data.projects,
                        metadata: data.metadata,
                        dashboardLoaded: true,
                        loading: false,
                    });
                } catch (error) {
                    const axiosError = error as AxiosError;
                    const errorMessage =
                        (axiosError.response?.data as { message?: string })?.message ||
                        axiosError.message ||
                        "Erreur lors du chargement du dashboard admin";

                    console.error("Erreur dans fetchDashboardData :", errorMessage);
                    set({ error: errorMessage, loading: false });
                }
            },
        }),
        {
            name: "dashboard-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
