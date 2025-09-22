import { PageLayoutScreen } from "@/components/layout/common";
import { LandingLayoutProps } from "@/lib/types";
import { Metadata } from "next";

export function generateViewport() {
  return "width=device-width, initial-scale=1, maximum-scale=1";
}

export const metadata: Metadata = {
  title: "À propos - DavidWebProjects | David CHANGEA",
  description:
    "Découvrez David CHANGEA, développeur web freelance spécialisé en création de sites sur mesure, refonte, optimisation SEO et solutions d’hébergement.",
  keywords: [
    "À propos",
    "David CHANGEA",
    "DavidWebProjects",
    "développeur web freelance",
    "création site web",
    "refonte site web",
    "SEO",
    "hébergement web",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://davidwebprojects.fr/about",
  },
  openGraph: {
    type: "website",
    title: "À propos - DavidWebProjects | David CHANGEA",
    description:
      "Rencontrez David CHANGEA, développeur web freelance : expert en React, création de sites sur mesure, optimisation SEO et hébergement performant.",
    url: "https://davidwebprojects.fr/about",
    siteName: "DavidWebProjects | David CHANGEA",
    images: [
      {
        url: "https://davidwebprojects.fr/images/schemas/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "À propos - DavidWebProjects | David CHANGEA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos - DavidWebProjects | David CHANGEA",
    description:
      "Découvrez David CHANGEA, développeur web freelance expert en création de sites sur mesure, SEO et hébergement web.",
    images: ["https://davidwebprojects.fr/images/schemas/twitter-image.jpg"],
  },
};

export default async function AboutLayout({ children }: LandingLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}
