'use client'

import { EnrichedProject } from '@/lib/types/admin/dashboard/dashboard'

interface Props {
    stats: EnrichedProject['stats']
}

export const ProjectStatsBlock = ({ stats }: Props) => {
    return (
        <div className="space-y-4">
            {/* Titre de la section */}
            <h3 className="text-xl font-bold text-primary text-center border-b pb-2">
                Statistiques du projet
            </h3>

            {/* Liste des statistiques affichées en texte simple */}
            <ul className="list-disc ml-6 mt-1 text-sm text-muted-foreground">
                <li>Durée : {stats?.duration || 'N/A'}</li>
                <li>Période : {stats?.periode || 'N/A'}</li>
                <li>Performance : {stats?.performance || 'N/A'}%</li>
            </ul>
        </div>
    )
}
