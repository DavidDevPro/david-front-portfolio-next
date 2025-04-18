"use client";

import { useState } from "react";
import { DataTable, TableHeaderButton } from "@/components/dashboard/dashboard-shared";
import {
    useProjectColumns,
    ProjectsTableToolbar,
    ProjectDetailsRow,
    ToggleVisibilityButton,
} from "@/components/dashboard/projects";


import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { useEnrichedProjects } from "@/hooks/useEnrichedProjects";

export const ProjectsTableView = () => {
    const projects = useEnrichedProjects();

    const [showOnlyVisible, setShowOnlyVisible] = useState(false);
    const toggleShowOnlyVisible = () => setShowOnlyVisible((prev) => !prev);

    const filteredProjects = projects.filter((project) =>
        showOnlyVisible ? project.visible : true
    );

    const [expandedRows, setExpandedRows] = useState<string[]>([]);
    const toggleExpand = (rowId: string) => {
        setExpandedRows((prev) =>
            prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]
        );
    };

    const toggleVisibility = (projectId: number, newVisible: boolean) => {
        useDashboardStore.setState((state) => ({
            projects: state.projects.map((p) =>
                p.id === projectId ? { ...p, visible: newVisible } : p
            ),
        }));
    };

    const columns = useProjectColumns(toggleVisibility, expandedRows, toggleExpand);
    console.log("columns:", columns);
    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <ToggleVisibilityButton
                    showVisible={showOnlyVisible}
                    toggleShowVisible={toggleShowOnlyVisible}
                />
                <TableHeaderButton
                    buttonLabel="Créer un projet"
                    buttonHref="/dashboard/projects/create"
                />
            </div>

            <DataTable
                columns={columns}
                data={filteredProjects}
                getRowId={(row) => row.id.toString()} // <-- Ajout essentiel ici
                ToolbarComponent={ProjectsTableToolbar}
                showSelectedRowsCount={true}
                renderSubComponent={(row) =>
                    row.original.visible && expandedRows.includes(row.id) ? (
                        <ProjectDetailsRow project={row.original} />
                    ) : null
                }
            />
        </>
    );
};
