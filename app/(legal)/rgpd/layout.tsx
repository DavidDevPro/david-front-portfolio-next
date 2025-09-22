import { PageLayoutScreen } from "@/components/layout/common";
import { PageLayoutProps } from "@/lib/types";
import { Metadata } from "next";

export function generateViewport() {
  return "width=device-width, initial-scale=1, maximum-scale=1";
}

export const metadata: Metadata = {
  title: "Politique de Confidentialité - DavidWebProjects | David CHANGEA",
  description:
    "Découvrez la politique de confidentialité de DavidWebProjects. Informez-vous sur la collecte, l'utilisation et la protection de vos données personnelles.",
  keywords: [
    "politique de confidentialité",
    "protection des données",
    "données personnelles",
    "DavidWebProjects",
    "David CHANGEA",
    "vie privée",
    "gestion des données",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://davidwebprojects.fr/politique-confidentialite",
  },
  openGraph: {
    type: "website",
    title: "Politique de Confidentialité - DavidWebProjects | David CHANGEA",
    description:
      "Découvrez la politique de confidentialité de DavidWebProjects, incluant la gestion des données personnelles et la protection de votre vie privée.",
    url: "https://davidwebprojects.fr/politique-confidentialite",
    siteName: "DavidWebProjects | David CHANGEA",
    images: [
      {
        url: "https://davidwebprojects.fr/schemas/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Politique de Confidentialité - DavidWebProjects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité - DavidWebProjects | David CHANGEA",
    description:
      "Découvrez la politique de confidentialité de DavidWebProjects, incluant la gestion des données personnelles et la protection de votre vie privée.",
    images: [
      "https://davidwebprojects.fr/schemas/twitter-image.jpg",
    ],
  },
};

export default function PrivacyLayout({ children }: PageLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}
