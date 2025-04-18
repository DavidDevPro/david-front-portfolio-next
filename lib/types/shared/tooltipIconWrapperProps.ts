import { ReactNode } from "react"

export interface TooltipIconWrapperProps {
  children: ReactNode
  tooltip: string
  onClick?: () => void
  className?: string
  isAdmin?: boolean // 👈 ajout de cette prop
}