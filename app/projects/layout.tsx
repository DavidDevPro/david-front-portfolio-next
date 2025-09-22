import { PageLayoutScreen } from "@/components/layout/common";
import { LandingLayoutProps } from "@/lib/types";
import { Metadata } from "next";

export function generateViewport() {
  return "width=device-width, initial-scale=1, maximum-scale=1";
}

export const metadata: Metadata = {
  title: "Projets - Portfolio DavidWebProjects | David CHANGEA",
  description:
    "Découvrez les projets réalisés par David CHANGEA : création de sites web sur mesure, refonte, optimisation SEO et solutions d’hébergement.",
  keywords: [
    "projets web",
    "portfolio",
    "DavidWebProjects",
    "David CHANGEA",
    "création site web",
    "refonte site web",
    "SEO",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://davidwebprojects.fr/projects",
  },
  openGraph: {
    type: "website",
    title: "Projets - Portfolio DavidWebProjects | David CHANGEA",
    description:
      "Parcourez les projets de David CHANGEA : création de sites sur mesure, refonte web, optimisation SEO et hébergement performant.",
    url: "https://davidwebprojects.fr/projects",
    siteName: "DavidWebProjects | David CHANGEA",
    images: [
      {
        url: "https://davidwebprojects.fr/images/schemas/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Projets - DavidWebProjects | David CHANGEA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets - Portfolio DavidWebProjects | David CHANGEA",
    description:
      "Découvrez les projets réalisés par David CHANGEA, développeur web freelance expert en création sur mesure et SEO.",
    images: ["https://davidwebprojects.fr/images/schemas/twitter-image.jpg"],
  },
};

export default async function ProjectLayout({ children }: LandingLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}
