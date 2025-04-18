'use client'

import { EnrichedProject } from '@/lib/types/admin/dashboard/dashboard'
import { SectionsBlock } from './SectionsBlock'
import { TechnologiesBlock } from './TechnologiesBlock'
import { FeaturesBlock } from './FeaturesBlock'
import { ProjectStatsBlock } from './ProjectStatsBlock'
import { SecondaryImagesBlock } from './SecondaryImagesBlock'

interface Props {
    project: EnrichedProject
}

export const ProjectFullDetails = ({ project }: Props) => {
    return (
        <div className="space-y-10">
            {/* Bloc des images secondaires */}
            <SecondaryImagesBlock
                images={project.images}
                onAdd={() => console.log('Ajout image secondaire')}
                onEdit={(index) => console.log('Modifier image secondaire', index)}
                onDelete={(index) => console.log('Supprimer image secondaire', index)}
            />

            {/* Bloc des sections */}
            <SectionsBlock
                sections={project.sections}
                onAdd={() => console.log('Ajout section')}
                onEdit={(id) => console.log('Modifier section', id)}
                onDelete={(id) => console.log('Supprimer section', id)}
            />

            {/* Bloc des technologies */}
            <TechnologiesBlock
                technologies={project.technologies}
                onAdd={() => console.log('Ajout technologie')}
                onDelete={(index) => console.log('Supprimer technologie', index)}
            />

            {/* Bloc des fonctionnalités */}
            <FeaturesBlock
                features={project.features}
                onAdd={() => console.log('Ajout fonctionnalité')}
                onDelete={(index) => console.log('Supprimer fonctionnalité', index)}
            />

            {/* Bloc des statistiques */}
            <ProjectStatsBlock stats={project.stats} />
        </div>
    )
}
