'use client'

import { Button } from '@/components/ui/button'
import { Pencil, Trash } from 'lucide-react'

interface Props {
    description?: string
}

export const CardDescriptionBlock = ({ description }: Props) => {
    return (
        <div className="bg-white p-4 rounded border shadow-sm flex flex-col justify-center items-center text-center">
            <strong className="mb-2 text-sm">Description sur la Card :</strong>
            <p className="text-muted-foreground px-4">
                {description || 'Non renseignée'}
            </p>
            <div className="flex gap-2 justify-center mt-4">
                <Button size="icon" variant="ghost">
                    <Pencil />
                </Button>
                <Button size="icon" variant="ghost">
                    <Trash />
                </Button>
            </div>
        </div>
    )
}
