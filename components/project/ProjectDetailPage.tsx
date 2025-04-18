"use client";

import { ProjectFeature, ProjectCTA, ProjectSlider, ProjectTechnologie, ProjectHeader, ProjectMain } from "@/components/project";
import { ProjectDetailPageProps } from "@/lib/types";

export const ProjectDetailPage = ({ project }: ProjectDetailPageProps) => {


    return (
        <div className=" mx-auto py-20 flex flex-col gap-20">

            {/* Header */}
            <ProjectHeader title={project.title} description={project.description} />

            {/* Slider */}
            <ProjectSlider images={project.images ?? [project.image]} title={project.title} />

            {/* Technologies */}
            <ProjectTechnologie technologies={project.technologies} />

            {/* fonctionnalités */}
            <ProjectFeature features={project.features} />

            {/* A propos du projet */}
            <ProjectMain project={project} />

            {/* section CTA */}
            <ProjectCTA />
        </div >
    );
};
