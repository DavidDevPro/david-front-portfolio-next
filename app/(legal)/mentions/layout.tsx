import { PageLayoutScreen } from "@/components/layout/common";
import { PageLayoutProps } from "@/lib/types";
import { Metadata } from "next";

export function generateViewport() {
  return "width=device-width, initial-scale=1, maximum-scale=1";
}

export const metadata: Metadata = {
  title: "Mentions Légales - DavidWebProjects | David CHANGEA",
  description:
    "Découvrez les mentions légales du site DavidWebProjects : informations sur le propriétaire, conditions d'utilisation et protection des données personnelles.",
  keywords: [
    "mentions légales",
    "DavidWebProjects",
    "conditions d'utilisation",
    "protection des données",
    "RGPD",
    "David CHANGEA",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://davidwebprojects.fr/mentions-legales",
  },
  openGraph: {
    type: "website",
    title: "Mentions Légales - DavidWebProjects | David CHANGEA",
    description:
      "Consultez les informations légales, conditions d'utilisation et protection des données sur le site DavidWebProjects.",
    url: "https://davidwebprojects.fr/mentions-legales",
    siteName: "DavidWebProjects | David CHANGEA",
    images: [
      {
        url: "https://davidwebprojects.fr/schemas/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mentions Légales - DavidWebProjects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions Légales - DavidWebProjects | David CHANGEA",
    description:
      "Informations légales et conditions d'utilisation du site DavidWebProjects, avec protection des données personnelles.",
    images: [
      "https://davidwebprojects.fr/schemas/twitter-image.jpg",
    ],
  },
};

export default function LegalesLayout({ children }: PageLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}
