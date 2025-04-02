'use client'

import { EnrichedProject } from '@/lib/types/admin/dashboard/dashboard'

import { CardDescriptionBlock } from './CardDescriptionBlock'
import { CardImageBlock } from '../..'

interface Props {
    project: EnrichedProject
    onEditImage: () => void
}

export const ProjectCardSettings = ({ project, onEditImage }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardImageBlock image={project.image} onEditImage={onEditImage} />
            <CardDescriptionBlock description={project.description} />
        </div>
    )
}
