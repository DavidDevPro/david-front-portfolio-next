import { PageLayoutDashboardScreen } from "@/components/layout/admin";
import { PageLayoutProps } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tableau de Bord - DavidwebprojectsPortfolio",
  description: "Accédez à votre tableau de bord sur DavidWebProjects pour gérer vos projets, paramètres et préférences.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({ children }: PageLayoutProps) {
  return <PageLayoutDashboardScreen>{children}</PageLayoutDashboardScreen>;
}
