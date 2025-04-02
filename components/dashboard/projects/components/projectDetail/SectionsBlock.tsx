'use client'

import { Button } from '@/components/ui/button'
import { Pencil, Trash, Plus } from 'lucide-react'
import { Section } from '@/lib/types/admin/dashboard/dashboard'

interface Props {
    sections: Section[]
    onAdd: () => void
    onEdit: (id: number) => void
    onDelete: (id: number) => void
}

export const SectionsBlock = ({ sections, onAdd, onEdit, onDelete }: Props) => {
    return (
        <div className="space-y-4">
            {/* Titre de la section */}
            <h3 className="text-xl font-bold text-primary text-center border-b pb-2">
                Sections du projet
            </h3>

            {/* Bouton d'ajout de section */}
            <div className="flex justify-end">
                <Button size="icon" variant="ghost" onClick={onAdd}>
                    <Plus />
                </Button>
            </div>

            {/* Liste des sections si disponibles */}
            {sections.length > 0 ? (
                <div className="space-y-4">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-background border p-4 rounded shadow-sm space-y-2"
                        >
                            {/* Titre et contenu de la section */}
                            <h4 className="font-semibold">{section.title}</h4>
                            <p className="text-muted-foreground">{section.content}</p>

                            {/* Boutons de modification et de suppression */}
                            <div className="flex gap-2 justify-end">
                                <Button size="icon" variant="ghost" onClick={() => onEdit(section.id)}>
                                    <Pencil size={16} />
                                </Button>
                                <Button size="icon" variant="ghost" onClick={() => onDelete(section.id)}>
                                    <Trash size={16} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Message si aucune section n'est renseignée
                <p className="text-muted-foreground">Aucune section renseignée</p>
            )}
        </div>
    )
}