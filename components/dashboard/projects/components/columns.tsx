import { ColumnDef } from '@tanstack/react-table'
import { EnrichedProject } from '@/lib/types/admin/dashboard'
import { Eye, EyeOff, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { TooltipIconWrapper } from '@/components/shared'
dayjs.locale('fr')

type ToggleVisibility = (projectId: number, newValue: boolean) => void

type ToggleExpand = (rowId: string) => void

export const useProjectColumns = (
    toggleVisibility: ToggleVisibility,
    expandedRows: string[],
    toggleExpand: ToggleExpand
): ColumnDef<EnrichedProject>[] => [
        {
            id: 'expand',
            header: '',
            cell: ({ row }) => {
                const isExpanded = expandedRows.includes(row.id)
                return (
                    <TooltipIconWrapper
                        tooltip={isExpanded ? 'Réduire les détails' : 'Afficher les détails'}
                        onClick={() => toggleExpand(row.id)}
                    >
                        {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </TooltipIconWrapper>
                )
            },
        },
        {
            id: 'index',
            header: '#',
            cell: ({ row }) => row.index + 1,
        },
        {
            accessorKey: 'title',
            header: 'Titre',
        },
        {
            accessorKey: 'type.name',
            header: 'Type',
        },
        {
            accessorKey: 'tag.name',
            header: 'Tag',
            cell: ({ row }) => {
                const tag = row.original.tag?.name
                return tag ? <span className="px-2 py-1 rounded bg-muted text-xs">{tag}</span> : '—'
            },
        },
        {
            accessorKey: 'description',
            header: 'Description',
        },
        {
            accessorKey: 'updated_at',
            header: 'Modifié le',
            cell: ({ row }) => {
                const updatedAt = row.original.updated_at
                return updatedAt ? dayjs(updatedAt).format('DD/MM/YYYY à HH:mm') : '—'
            },
        },
        {
            id: 'image',
            header: 'Image principale',
            cell: ({ row }) => {
                const image = row.original.image
                return image ? (
                    <Image
                        src={image}
                        alt="image principale"
                        width={250}
                        height={400}
                        className="rounded cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => window.open(image, '_blank')}
                    />
                ) : 'Aucune image'
            },
        },
        // {
        //     id: 'visible',
        //     header: 'Visible',
        //     cell: ({ row }) => {
        //         const project = row.original
        //         const Icon = project.visible ? Eye : EyeOff

        //         const tooltip = project.visible
        //             ? `Visible depuis le ${project.published_at ? dayjs(project.published_at).format('DD/MM/YYYY à HH:mm') : 'inconnu'}`
        //             : 'Projet non visible'

        //         return (
        //             <TooltipIconWrapper
        //                 tooltip={`${tooltip}\n(Cliquez pour modifier la visibilité)`}
        //                 onClick={() => toggleVisibility(project.id, !project.visible)}
        //             >
        //                 <Icon className="w-5 h-5 shrink-0" />
        //             </TooltipIconWrapper>
        //         )
        //     },
        // },
        {
            id: 'visible',
            header: 'Visible',
            cell: ({ row }) => {
                const project = row.original
                const Icon = project.visible ? Eye : EyeOff
                const date = project.published_at

                const tooltip = project.visible
                    ? `Visible depuis le ${date ? dayjs(date).format('DD/MM/YYYY à HH:mm') : '—'}`
                    : 'Cliquez pour rendre ce projet visible'

                return (
                    <TooltipIconWrapper
                        tooltip={tooltip}
                        onClick={() => toggleVisibility(project.id, !project.visible)}
                    >
                        <Icon className="w-5 h-5 shrink-0" />
                    </TooltipIconWrapper>
                )
            },
        },
        {
            id: 'published_at',
            header: 'Publié le',
            cell: ({ row }) => {
                const project = row.original
                const date = project.published_at

                return date
                    ? dayjs(date).format('DD/MM/YYYY à HH:mm')
                    : <span className="text-muted-foreground italic">Non publié</span>
            },
        },
    ]
