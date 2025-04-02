'use client'

import { Button } from '@/components/ui/button'
import { ProjectFeature } from '@/lib/types/admin/dashboard'

import { Trash, Plus } from 'lucide-react'


interface Props {
    features: ProjectFeature[]
    onAdd: () => void
    onDelete: (index: number) => void
}

export const FeaturesBlock = ({ features, onAdd, onDelete }: Props) => {
    return (
        <div className="space-y-4">
            {/* Titre de la section */}
            <h3 className="text-xl font-bold text-primary text-center border-b pb-2">
                Fonctionnalités
            </h3>

            {/* Bouton d'ajout de fonctionnalité */}
            <div className="flex justify-end">
                <Button size="icon" variant="ghost" onClick={onAdd}>
                    <Plus />
                </Button>
            </div>

            {/* Affichage des fonctionnalités si disponibles */}
            <div className="flex flex-wrap gap-2">
                {features.length > 0 ? (
                    features.map((feat, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 bg-background border p-2 rounded shadow-sm"
                        >
                            {/* Icône de la fonctionnalité */}
                            <span className="w-4 h-4 shrink-0 text-primary mr-2 flex items-center">
                                {feat.icon}
                            </span>
                            {/* Nom de la fonctionnalité */}
                            <span>{feat.name}</span>
                            {/* Actions */}
                            <Button size="icon" variant="ghost" onClick={() => onDelete(i)}>
                                <Trash size={16} />
                            </Button>
                        </div>
                    ))
                ) : (
                    // Message si aucune fonctionnalité
                    <p className="text-muted-foreground">Aucune</p>
                )}
            </div>
        </div>
    )
}
