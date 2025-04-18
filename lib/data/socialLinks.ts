// data/socialLinks.ts
import { LuFacebook, LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";


// Les liens de réseaux sociaux
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/company/david-web-projects",
  github: "https://github.com/DavidDevPro",
  facebook: "https://www.facebook.com/DavidWebProjects/",
  instagram: "https://www.instagram.com/davidwebprojects/",
};

// Les icônes de réseaux sociaux, associées aux liens
export const socialMediaIcons = [
  { href: socialMediaLinks.linkedin, icon: LuLinkedin, label: "Linkedin", title: "Linkedin" },
  { href: socialMediaLinks.github, icon: LuGithub, label: "Github", title: "Github" },
  { href: socialMediaLinks.facebook, icon: LuFacebook, label: "Facebook", title: "Facebook" },
  { href: socialMediaLinks.instagram, icon: LuInstagram, label: "Instagram", title: "Instagram" },
];
