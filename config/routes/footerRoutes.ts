import { socialMediaIcons } from "@/lib/data/socialLinks";
import { FooterRouteSection } from "@/lib/types";

// Définir les routes pour la navigation du footer
export const footerRoutes: FooterRouteSection[] = [
  {
    label: "Mon site",
    items: [
      { href: "/", name: "Accueil" },
      { href: "/about", name: "A propos" },
      { href: "/project", name: "Projets" },
      { href: "/contact", name: "Contact" },
    ],
  },
  {
    label: "Me suivre",
    items: [
      { href: socialMediaIcons.find(icon => icon.label === "Linkedin")?.href || "", name: "Linkedin", external: true },
      { href: socialMediaIcons.find(icon => icon.label === "Facebook")?.href || "", name: "Facebook", external: true },  
      { href: socialMediaIcons.find(icon => icon.label === "Instagram")?.href || "", name: "Instagram", external: true },
      { href: "/contact", name: "Contact" },
    ],
  },
  {
    label: "Legal",
    items: [
      { href: "/mentions", name: "Mentions Légales" },
      { href: "/rgpd", name: "Politique de Confidentialité" },
    ],
  },
];