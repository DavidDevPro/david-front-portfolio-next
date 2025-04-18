import { useMemo } from 'react'
import { useDashboardStore } from '@/lib/store/useDashboardStore'
import { enrichFeaturesWithIcons, enrichTechnologiesWithIcons } from '@/lib/utils/projectUtils'
import { EnrichedProject } from '@/lib/types/admin/dashboard/dashboard'

export const useEnrichedProjects = (): EnrichedProject[] => {
    const { projects, metadata } = useDashboardStore()

    return useMemo(() => {
        return projects.map((project) => ({
            id: project.id,
            slug: project.slug,
            title: project.title,
            image: project.image,
            description: project.description,
            visible: project.visible,
            sections: project.sections,
            images: project.images,
            stats: project.stats,
            created_at: project.created_at,
            updated_at: project.updated_at,
            technologies: enrichTechnologiesWithIcons(
                project.technology_ids.map(id => metadata.technologies.find(tech => tech.id === id)!)
            ),

            features: enrichFeaturesWithIcons(
                project.feature_ids.map(id => metadata.features.find(feat => feat.id === id)!)
            ),

            type: metadata.types.find(type => type.id === project.type_id) ?? null,
            tag: metadata.tags.find(tag => tag.id === project.tag_id) ?? null,
        }))
    }, [projects, metadata])
}
