import { Metadata, Project } from "./dashboard";

export interface DashboardStore {
    projects: Project[];
    metadata: Metadata;
    dashboardLoaded: boolean;
    loading: boolean;
    error: string | null;
    fetchDashboardData: (token: string, forceUpdate?: boolean) => Promise<void>;
}
