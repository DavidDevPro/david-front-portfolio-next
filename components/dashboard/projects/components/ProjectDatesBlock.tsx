'use client'

import dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')

interface Props {
    createdAt: string
    updatedAt?: string
}

export const ProjectDatesBlock = ({ createdAt, updatedAt }: Props) => {
    return (
        <div className="text-sm text-muted-foreground text-right pt-4 border-t border-muted mt-6">
            {/* Affiche la date de création formatée */}
            <p>Créé le : {dayjs(createdAt).format('DD/MM/YYYY à HH:mm')}</p>

            {/* Affiche la date de dernière modification si elle existe */}
            <p>
                Dernière modification :{' '}
                {updatedAt ? dayjs(updatedAt).format('DD/MM/YYYY à HH:mm') : 'Aucune'}
            </p>
        </div>
    )
}
