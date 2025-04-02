'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Pencil, Trash, Plus } from 'lucide-react'
import { Image as ImageType } from '@/lib/types/admin/dashboard/dashboard'

interface Props {
    images: ImageType[]
    onAdd: () => void
    onEdit: (index: number) => void
    onDelete: (index: number) => void
}

export const SecondaryImagesBlock = ({ images, onAdd, onEdit, onDelete }: Props) => {
    return (
        <div className="space-y-4">
            {/* Titre de la section */}
            <h3 className="text-xl font-bold text-primary text-center border-b pb-2">
                Images secondaires
            </h3>

            {/* Bouton d'ajout d'image secondaire */}
            <div className="flex justify-end">
                <Button size="icon" variant="ghost" onClick={onAdd}>
                    <Plus />
                </Button>
            </div>

            {/* Affichage des images secondaires si disponibles */}
            {images.length > 0 ? (
                <div className="flex gap-4 flex-wrap">
                    {images.map((img, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-1">
                            <Image
                                src={img.src}
                                alt={img.description || 'Image'}
                                width={250}
                                height={400}
                                className="rounded cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => window.open(img.src, '_blank')}
                            />
                            <small className="text-sm text-muted-foreground text-center">
                                {img.description}
                            </small>
                            <div className="flex gap-1">
                                <Button size="icon" variant="ghost" onClick={() => onEdit(idx)}>
                                    <Pencil size={16} />
                                </Button>
                                <Button size="icon" variant="ghost" onClick={() => onDelete(idx)}>
                                    <Trash size={16} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground">Aucune</p>
            )}
        </div>
    )
}
