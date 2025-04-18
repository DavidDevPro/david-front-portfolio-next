'use client'

import { Button } from '@/components/ui/button'
import { ProjectTechnology } from '@/lib/types/admin/dashboard'
import { Trash, Plus } from 'lucide-react'
import { ReactNode } from 'react'

interface Props {
    technologies: ProjectTechnology[]
    onAdd: () => void
    onDelete: (index: number) => void
}

export const TechnologiesBlock = ({ technologies, onAdd, onDelete }: Props) => {
    return (
        <div className="space-y-4">
            {/* Titre de la section */}
            <h3 className="text-xl font-bold text-primary text-center border-b pb-2">
                Technologies
            </h3>

            {/* Bouton d'ajout de technologie */}
            <div className="flex justify-end">
                <Button size="icon" variant="ghost" onClick={onAdd}>
                    <Plus />
                </Button>
            </div>

            {/* Liste des technologies */}
            {technologies.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 bg-background border p-2 rounded shadow-sm"
                        >
                            {/* Icône de la technologie (JSX.Element) */}
                            <span className="w-4 h-4 shrink-0 text-primary mr-2 flex items-center">
                                {tech.icon as ReactNode}
                            </span>
                            <span>{tech.name}</span>
                            {/* Bouton de suppression */}
                            <Button size="icon" variant="ghost" onClick={() => onDelete(i)}>
                                <Trash size={16} />
                            </Button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground">Aucune technologie renseignée</p>
            )}
        </div>
    )
}
