import { PageLayoutFullScreen } from "@/components/layout/common";
import { PageLayoutProps } from "@/lib/types";
import { Metadata } from "next";

export function generateViewport() {
  return "width=device-width, initial-scale=1, maximum-scale=1";
}

export const metadata: Metadata = {
  title: "Contact - DavidWebProjects | David CHANGEA",
  description:
    "Contactez David CHANGEA, développeur web freelance. Pour toute demande de création, refonte de sites, SEO, hébergement ou collaboration.",
  keywords: [
    "contact",
    "DavidWebProjects",
    "David CHANGEA",
    "développeur web freelance",
    "création site web",
    "refonte site web",
    "SEO",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://davidwebprojects.fr/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact - David Web Projects | David CHANGEA",
    description:
      "Contactez David CHANGEA, développeur web freelance pour création de sites, refonte, SEO et hébergement.",
    url: "https://davidwebprojects.fr/contact",
    siteName: "DavidWebProjects | David CHANGEA",
    images: [
      {
        url: "https://davidwebprojects.fr/images/schemas/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact - DavidWebProjects | David CHANGEA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - DavidWebProjects | David CHANGEA",
    description:
      "Contactez David CHANGEA pour vos projets web : création de sites, refonte, SEO et hébergement.",
    images: ["https://davidwebprojects.fr/images/schemas/twitter-image.jpg"],
  },
};

export default function ContactLayout({ children }: PageLayoutProps) {
  return (
    <PageLayoutFullScreen>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 bg-[url('/images/projects/homeBanner.webp')] bg-cover bg-[35%_center] md:bg-[65%_center] bg-no-repeat bg-fixed before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/80 before:via-[#192846]/85 before:to-[#192846]/95" />

        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
          {children}
        </div>
      </div>
    </PageLayoutFullScreen>
  );
}
