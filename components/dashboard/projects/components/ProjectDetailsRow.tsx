'use client'

import { useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { EnrichedProject } from '@/lib/types/admin/dashboard/dashboard'
import { ProjectCardSettings } from './projectCard/ProjectCardSettings'
import { ProjectFullDetails } from './projectDetail/ProjectFullDetails'
import { ImageUploadModal } from '@/components/dashboard/projects'
import { ProjectDatesBlock } from './ProjectDatesBlock'
import { Minus, Plus } from 'lucide-react'

dayjs.locale('fr')

interface Props {
    project: EnrichedProject
}

export const ProjectDetailsRow = ({ project }: Props) => {
    const [showImageModal, setShowImageModal] = useState(false)
    const [showCardSettings, setShowCardSettings] = useState(true)
    const [showFullDetails, setShowFullDetails] = useState(true)

    return (
        <div className="p-6 flex flex-col gap-6">
            {/* Bloc Paramètres de la Card */}
            <div className="bg-white rounded border shadow-sm p-6 space-y-6">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-xl font-bold text-primary">Paramètres de la Card</h2>
                    <button
                        onClick={() => setShowCardSettings(!showCardSettings)}
                        className="text-muted-foreground"
                    >
                        {showCardSettings ? <Minus /> : <Plus />}
                    </button>
                </div>

                {showCardSettings && (
                    <ProjectCardSettings
                        project={project}
                        onEditImage={() => setShowImageModal(true)}
                    />
                )}
            </div>

            {/* Bloc Vue détaillée */}
            <div className="bg-white rounded border shadow-sm p-6 space-y-6">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-xl font-bold text-primary">Vue détaillée du projet</h2>
                    <button
                        onClick={() => setShowFullDetails(!showFullDetails)}
                        className="text-muted-foreground"
                    >
                        {showFullDetails ? <Minus /> : <Plus />}
                    </button>
                </div>

                {showFullDetails && <ProjectFullDetails project={project} />}
            </div>

            {/* Modal d'upload image */}
            <ImageUploadModal
                isOpen={showImageModal}
                onClose={() => setShowImageModal(false)}
                onUpload={(file, description) => {
                    console.log('Fichier ajouté :', file, description)
                }}
            />

            {/* Dates */}
            <ProjectDatesBlock
                createdAt={project.created_at ?? ''}
                updatedAt={project.updated_at}
            />
        </div>
    )
}
