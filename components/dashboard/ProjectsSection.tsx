"use client";

import { SectionModeProps } from '@/lib/types';
import { ProjectsTableView } from './projects';
// import { ProjectsTableView, ProjectCreateView, ProjectEditView } from './projects';
export const ProjectsSection = ({ mode }: SectionModeProps) => {

    return (
        <>
            {mode === "view" && <ProjectsTableView />}
            {/* {mode === "create" && <ProjectCreateView />}
            {mode === "edit" && <ProjectEditView />} */}
        </>
    );
};
