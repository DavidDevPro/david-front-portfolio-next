import { BsFiletypePsd } from "react-icons/bs";
import { SiNextdotjs, SiTailwindcss, SiLaravel, SiHtml5, SiCss3, SiTypescript, SiPhp, SiPhpmyadmin, SiGit, SiSwagger, SiMysql, SiVite, SiSass, SiJavascript } from "react-icons/si";

export interface Technology {
    id: number;
    name: string;
    icon: JSX.Element;
}

export const technologies: Technology[] = [
    { id: 1, name: "Next.js", icon: <SiNextdotjs /> },
    { id: 2, name: "Tailwind", icon: <SiTailwindcss /> },
    { id: 3, name: "TypeScript", icon: <SiTypescript /> },
    { id: 4, name: "Laravel", icon: <SiLaravel /> },
    { id: 5, name: "PHP", icon: <SiPhp /> },
    { id: 6, name: "PhpMyAdmin", icon: <SiPhpmyadmin /> },
    { id: 6, name: "MySql", icon: <SiMysql /> },
    { id: 7, name: "Git", icon: <SiGit /> },
    { id: 8, name: "ApiRest", icon: <SiSwagger /> },
    { id: 9, name: "HTML", icon: <SiHtml5 /> },
    { id: 10, name: "CSS", icon: <SiCss3 /> },
    { id: 11, name: "Vite.js", icon: <SiVite /> },
    { id: 12, name: "Sass", icon: <SiSass /> },
    { id: 13, name: "JavaScript", icon: <SiJavascript /> },
    { id: 14, name: "Photoshop", icon: <BsFiletypePsd /> },
];

// Simulation d'une API qui retourne un objet avec une clé `data`
export const fetchTechnologies = async (): Promise<{ data: Technology[] }> => {
    return { data: technologies };
};
