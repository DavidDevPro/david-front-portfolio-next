import { PageLayoutScreen } from "@/components/layout/common";
import { PageLayoutProps } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales - David Web Projects | David CHANGEA",
  description:
    "Découvrez les mentions légales du site David Web Projects. Informations sur le propriétaire, les conditions d'utilisation, et la protection des données.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://davidwebprojects.fr/mentions-legales",
  },
  keywords: [
    "mentions légales",
    "David Web Projects",
    "conditions d'utilisation",
    "protection des données",
    "David CHANGEA",
  ],
  openGraph: {
    type: "website",
    title: "Mentions Légales - David Web Projects | David CHANGEA",
    description:
      "Consultez les informations légales et les conditions d'utilisation du site David Web Projects.",
    url: "https://davidwebprojects.fr/mentions-legales",
    images: [
      {
        url: "https://davidwebprojects.fr/schemas/og-mentions-legales.jpg",
        width: 1200,
        height: 603,
        alt: "Mentions Légales - David Web Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions Légales - David Web Projects | David CHANGEA",
    description:
      "Consultez les informations légales et les conditions d'utilisation du site David Web Projects.",
    images: ["https://davidwebprojects.fr/schemas/twitter-mentions-legales.jpg"],
  },
};

export default function LegalesLayout({ children }: PageLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}