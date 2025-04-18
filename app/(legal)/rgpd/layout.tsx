import { PageLayoutScreen } from "@/components/layout/common";
import { PageLayoutProps } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - David Web Projects | David CHANGEA",
  description:
    "Découvrez la politique de confidentialité de David Web Projects. Informez-vous sur la collecte, l'utilisation et la protection de vos données personnelles.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://davidwebprojects.fr/politique-confidentialite",
  },
  keywords: [
    "politique de confidentialité",
    "protection des données",
    "données personnelles",
    "David Web Projects",
    "David CHANGEA",
    "vie privée",
    "gestion des données",
  ],
  openGraph: {
    type: "website",
    title: "Politique de Confidentialité - David Web Projects | David CHANGEA",
    description:
      "Découvrez la politique de confidentialité de David Web Projects, incluant la gestion des données personnelles et la protection de votre vie privée.",
    url: "https://davidwebprojects.fr/politique-confidentialite",
    images: [
      {
        url: "https://davidwebprojects.fr/schemas/og-privacy.jpg",
        width: 1200,
        height: 602,
        alt: "Politique de Confidentialité - David Web Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité - David Web Projects | David CHANGEA",
    description:
      "Découvrez la politique de confidentialité de David Web Projects, incluant la gestion des données personnelles et la protection de votre vie privée.",
    images: ["https://davidwebprojects.fr/schemas/twitter-privacy.jpg"],
  },
};

export default function PrivacyLayout({ children }: PageLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}