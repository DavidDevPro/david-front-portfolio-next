import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import ClientOnlyWrapper from "@/config/ClientOnlyWrapper";

// Fonts globales via next/font/google (Next.js 15)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export function generateViewport() {
  return "width=device-width, initial-scale=1, maximum-scale=1";
}

export const metadata: Metadata = {
  title: "Portfolio DavidWebProjects | David CHANGEA - Développeur Web Freelance",
  description:
    "Portfolio de David CHANGEA | DavidWebProjects : création de sites sur mesure, refonte, SEO, hébergement et performance web.",
  authors: [{ name: "David CHANGEA" }],
  keywords: [
    "freelance développeur web",
    "création de site internet",
    "développement web sur mesure",
    "SEO",
    "développeur full stack",
    "DavidWebProjects",
    "France",
    "indépendant",
    "PME",
    "Beaumont les Valence",
    "Valence",
    "Drôme",
    "site web sur mesure",
    "concepteur",
    "créateur",
    "portfolio",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://portfolio.davidwebprojects.fr/" },
  openGraph: {
    title: "David CHANGEA | Développeur Web Freelance - Portfolio DavidWebProjects",
    description:
      "Découvrez les projets de David CHANGEA, spécialiste React/Next.js, création et refonte de sites web, SEO et hébergement performant.",
    url: "https://portfolio.davidwebprojects.fr/",
    type: "website",
    siteName: "Portfolio DavidWebProjects | David CHANGEA",
    images: [
      {
        url: "https://portfolio.davidwebprojects.fr/images/schemas/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio DavidWebProjects | David CHANGEA - Développeur Web Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Portfolio David CHANGEA | Développeur Web Freelance Front-End & Full-Stack - React, SEO, Hébergement",
    description:
      "Portfolio de David CHANGEA : création/refonte de sites web, optimisation SEO et performance. Découvrez les projets réalisés.",
    images: "https://portfolio.davidwebprojects.fr/images/schemas/twitter-image.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <head>
        {/* ✅ Optimisation Lighthouse */}
        {/* Preconnect pour Google Fonts (même si Next gère, Lighthouse veut le voir) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* JSON-LD Schema.org */}
        <Script id="schema-org-json-ld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "David CHANGEA | DavidWebProjects",
            image: "https://portfolio.davidwebprojects.fr/images/schemas/schema-image.jpg",
            description:
              "Développeur web freelance spécialisé React et Next.js, création et refonte de sites sur mesure, SEO, hébergement et performance web.",
            url: "https://portfolio.davidwebprojects.fr/",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3 place Hélène Grail",
              addressLocality: "Beaumont-lès-Valence",
              postalCode: "26760",
              addressCountry: "FR",
            },
            telephone: "+33 6 59 95 68 94",
            email: "contact@davidwebprojects.fr",
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "14:00" },
            ],
            sameAs: [
              "https://www.linkedin.com/in/david-changea",
              "https://github.com/DavidDevPro",
              "https://www.facebook.com/DavidWebProjects/",
              "https://x.com/DavidWebProject",
              "https://www.instagram.com/davidwebprojects/"
            ],
            areaServed: ["France", "Europe", "International"],
            founder: {
              "@type": "Person",
              name: "David CHANGEA",
              jobTitle: "Founder & Developer",
              sameAs: "https://www.linkedin.com/in/david-changea",
            },
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création de sites web sur mesure" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refonte de sites web" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solutions d'hébergement" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Optimisation de la performance des sites" } },
            ],
          })}
        </Script>

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-56LHPMXG8V" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-56LHPMXG8V');
          `}
        </Script>
      </head>

      <body className={cn(poppins.variable, montserrat.variable, "font-sans h-full")}>
        {<ClientOnlyWrapper>{children}</ClientOnlyWrapper>}
        <Toaster />
      </body>
    </html>
  );
}
