// data/socialLinks.ts
import { LuLinkedin, LuFacebook, LuGithub, LuInstagram } from "react-icons/lu";

// Les liens de réseaux sociaux
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/company/fabwebprojects",
  github: "https://github.com/FabriceDevPro",
  facebook: "https://www.facebook.com/FabWebProjects/",
  instagram: "https://www.instagram.com/fabwebprojects/",
};

// Les icônes de réseaux sociaux, associées aux liens
export const socialMediaIcons = [
  { href: socialMediaLinks.linkedin, icon: LuLinkedin, label: "Linkedin", title: "Linkedin" },
  { href: socialMediaLinks.github, icon: LuGithub, label: "Github", title: "Github" },
  { href: socialMediaLinks.facebook, icon: LuFacebook, label: "Facebook", title: "Facebook" },
  { href: socialMediaLinks.instagram, icon: LuInstagram, label: "Instagram", title: "Instagram" },
];
