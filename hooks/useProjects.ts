import { useDashboardStore } from "@/lib/store/useDashboardStore";

export const useProjects = () => {
    const projects = useDashboardStore((state) => state.projects);

    return { projects };
};