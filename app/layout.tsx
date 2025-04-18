import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import "./index.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import ClientOnlyWrapper from "@/config/ClientOnlyWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    "Portfolio DavidWebProjects | CHANGEA David Créateur de sites Web, SEO, hébergements",
  description:
    "Portfolio David Changea | DavidWebProjects développeur web freelance : création et refonte de sites, optimisation SEO, solutions d'hébergement, amélioration des performances et méthode agile.",
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
    "26",
    "site web sur mesure",
    "concepteur",
    "créateur",
    "conception de site web",
    "site web responsive",
    "site web performant",
    "création de site vitrine",
    "création site web",
    "portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "David CHANGEA | Développeur Web Freelance Front-End & Full-Stack - React, SEO, Hébergement - Méthode Agile",
    description:
      "Découvrez les projets de David CHANGEA, Développeur Web Freelance spécialisé en React, Next. Expertise en création de sites sur mesure, refonte de sites, optimisation SEO hébergement web et performance.",
    url: "https://portfolio.davidwebprojects.fr/",
    type: "website",
    siteName:
      "Développeur Web Freelance - Portfolio DavidWebProjects | David CHANGEA",
    images: [
      {
        url: "https://portfolio.davidwebprojects.fr/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Développeur Web Freelance - Portfolio DavidWebProjects | David CHANGEA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Portfolio David CHANGEA | Développeur Web Freelance Front-End & Full-Stack - React, SEO, Hébergement - Méthode Agile",
    description:
      "Développeur web freelance spécialisé en React, je propose des services de création de sites web sur mesure, ainsi que d'optimisation SEO et de performance. Pour en savoir plus sur mes réalisations, je vous invite à consulter mon portfolio.",
    images: "https://portfolio.davidwebprojects.fr/images/twitter-image.jpg",
  },
  alternates: {
    canonical: "https://portfolio.davidwebprojects.fr/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <head>
        {/* Schema.org JSON-LD */}
        <Script id="schema-org-json-ld" type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "David CHANGEA | David Web Projects",
            image: "https://portfolio.davidwebprojects.fr/images/schema-image.jpg",
            description:
              "Développeur web spécialisé dans React, création de sites web sur mesure, refonte de sites, optimisation SEO, hébergement, et performance web.",
            url: "https://portfolio.davidwebprojects.fr/",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3 place Hélène Grail",
              addressLocality: "Beaumont-lès-Valence",
              postalCode: "26760",
              addressCountry: "FR",
            },
            telephone: "+33 6 59 95 68 94",
            email: "dav.proweb@gmail.com",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Wednesday",
                opens: "09:00",
                closes: "14:00",
              },
            ],
            sameAs: [
              "https://www.linkedin.com/in/david-changea",
              "https://www.linkedin.com/company/david-web-projects",
              "https://github.com/DavidDevPro",
              "https://www.facebook.com/DavidWebProjects/",
              "https://portfolio.davidwebprojects.fr/",
              "https://x.com/DavidWebProject",
              "https://www.instagram.com/davidwebprojects/"
            ],
            areaServed: {
              "@type": "Place",
              name: ["France", "Europe", "International"],
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+33 6 59 95 68 94",
              contactType: "Customer Service",
              availableLanguage: ["French", "English"],
              email: "contact@davidwebprojects.fr",
            },
            founder: {
              "@type": "Person",
              name: "David Changea",
              jobTitle: "Founder & Developer",
              sameAs: "https://www.linkedin.com/in/david-changea",
            },
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Création de sites web sur mesure",
                  description:
                    "Développement de sites web personnalisés adaptés aux besoins spécifiques de chaque client, en utilisant les dernières technologies comme React.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Refonte de sites web",
                  description:
                    "Modernisation et amélioration de sites existants pour une meilleure performance, esthétique et compatibilité avec les dernières normes web.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO",
                  description:
                    "Optimisation des sites web pour les moteurs de recherche afin d'améliorer leur visibilité et leur classement.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Solutions d'hébergement",
                  description:
                    "Proposition de solutions d'hébergement adaptées aux besoins des clients pour assurer une disponibilité maximale et des performances optimales.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Optimisation de la performance des sites",
                  description:
                    "Amélioration de la vitesse et de l'efficacité des sites web pour offrir une meilleure expérience utilisateur.",
                },
              },
            ],
          })}
        </Script>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-56LHPMXG8V"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-56LHPMXG8V');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={cn(poppins.variable, montserrat.variable, "font-sans h-full")}>
        <ClientOnlyWrapper>
          {children}
        </ClientOnlyWrapper>
        <Toaster />
      </body>
    </html>
  );
}
