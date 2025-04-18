'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Pencil, Trash } from 'lucide-react'

interface Props {
    image: string
    onEditImage: () => void
}

export const CardImageBlock = ({ image, onEditImage }: Props) => {
    return (
        <div className="bg-background p-4 rounded border shadow-sm flex flex-col justify-center items-center text-center">


            <strong className="mb-2 text-sm">Image de la Card :</strong>

            {image ? (
                <div className='py-4 px-8 bg-accent rounded-xl border border-secondary'>
                    <Image
                        src={image}
                        alt="Image principale"
                        width={400}
                        height={250}
                        className="rounded shadow-md hover:scale-102 transition-transform duration-500 cursor-pointer will-change-transform"
                        onClick={() => window.open(image, '_blank')}
                    />
                </div>
            ) : (
                <p className="text-muted-foreground">Aucune image</p>
            )}

            <div className="flex gap-2 mt-4">
                <Button size="icon" variant="ghost" onClick={onEditImage}>
                    <Pencil />
                </Button>
                <Button size="icon" variant="ghost">
                    <Trash />
                </Button>
            </div>
        </div>
    )
}
