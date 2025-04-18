import { SiNextdotjs, SiTailwindcss, SiLaravel, SiHtml5, SiCss3, SiPhp, SiSass, SiVite, SiGoogle, SiGoogleanalytics } from "react-icons/si";
import { JSX } from "react";
import { BsFiletypePsd } from "react-icons/bs";
import { MdAdminPanelSettings, MdBuild, MdContactMail, MdDashboard, MdDevices, MdNavigation, MdSecurity, MdSpeed, MdSupportAgent, MdViewList } from "react-icons/md";
import { CgDatabase } from "react-icons/cg";
import { IoMdAnalytics } from "react-icons/io";
import { FaCameraRetro, FaEnvelopeOpenText, FaHandshake, FaLock, FaServer } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { RiPencilRuler2Line } from "react-icons/ri";

export type Technology = {
    name: string;
    icon: JSX.Element;
};
export type Feature = {
    name: string;
    icon: JSX.Element;
};

export type ProjectType = "integration" | "full-dev";

export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    images?: string[];
    technologies: Technology[];
    link?: string;
    sections: { title: string; content: string }[];
    stats: { duration: string; performance: number };
    features: Feature[];
    type: ProjectType; // Ajout du type
};

export const projects: Project[] = [
    {
        id: 1,
        slug: "davidwebprojects-website",
        title: "David Web Project",
        description: "David Web Projects est mon site freelance dédié à la création de solutions web",
        image: "/images/projects/cover_davidwebprojects.webp",
        images: [
            "/images/projects/davidwebprojects_1.webp",
            "/images/projects/davidwebprojects_2.webp",
            "/images/projects/davidwebprojects_3.webp",
            "/images/projects/davidwebprojects_4.webp",
            "/images/projects/davidwebprojects_5.webp",
            "/images/projects/davidwebprojects_6.webp",
            "/images/projects/davidwebprojects_7.webp",
            "/images/projects/davidwebprojects_8.webp",
            "/images/projects/davidwebprojects_9.webp",
            "/images/projects/davidwebprojects_10.webp",
            "/images/projects/davidwebprojects_11.webp",
            "/images/projects/davidwebprojects_12.webp",
            "/images/projects/davidwebprojects_13.webp"
        ],
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Laravel", icon: <SiLaravel /> },
        ],
        link: "https://davidwebprojects.fr/",
        sections: [
            {
                title: "Concepteur de sites web",
                content: "Je suis David, développeur web et fondateur de David Web Projects. J’accompagne les entreprises et entrepreneurs dans la création de sites web sur mesure, en alliant performance, design et stratégie digitale. Mon objectif est de concevoir des plateformes optimisées pour le référencement, la rapidité et l’expérience utilisateur, en proposant des solutions adaptées aux besoins spécifiques de chaque projet."
            },
            {
                title: "Site vitrine David Web Projects",
                content: "Ce site est à la fois une vitrine de mon savoir-faire et un exemple concret des technologies que j’utilise au quotidien. Développé avec Next.js pour des performances optimales et un rendu serveur efficace (SSR), il repose sur une interface moderne conçue avec Tailwind CSS. L’intégration de TypeScript permet une meilleure structure du code et une maintenance facilitée. Côté backend, j’ai choisi Laravel pour gérer les données de manière sécurisée et évolutive, notamment pour le formulaire de contact."
            },
            {
                title: "Optimisation et performances",
                content: "Chaque projet que je réalise suit les bonnes pratiques du développement web et du référencement. J’optimise le code et la gestion des ressources pour garantir un chargement rapide et une navigation fluide. L’hébergement sur un serveur cloud Infomaniak me permet d’assurer un bon niveau de performance et de sécurité. J’intègre également des solutions de caching et de préchargement pour améliorer encore davantage l’expérience utilisateur."
            },
            {
                title: "Maintenance et accompagnement",
                content: "En plus du développement web, je propose des services de refonte, d’optimisation et de maintenance pour assurer la pérennité des projets digitaux. J’interviens aussi en maintenance informatique, que ce soit pour l'OS ou le matériel, afin d’aider les entreprises à maintenir un environnement de travail performant et fiable. Chaque mission est réalisée avec une approche personnalisée, en fonction des besoins et des objectifs de mes clients."
            }
        ],
        stats: { duration: "3 mois", performance: 95 },
        features: [
            { name: "Design Responsive", icon: <MdDevices /> },
            { name: "SEO Optimisé", icon: <SiGoogle /> },
            { name: "Performances Améliorées", icon: <MdSpeed /> },
            { name: "Maintenance Continue", icon: <MdBuild /> },
            { name: "Support Personnalisé", icon: <MdSupportAgent /> },
            { name: "Hébergement Sécurisé", icon: <MdSecurity /> },
        ],
        type: "full-dev",

    },
    {
        id: 2,
        slug: "portfolio-v1",
        title: "Portfolio V1",
        description: "Mon site portfolio version 1, présentant mon parcours, mes compétences et mes services.",
        image: "/images/projects/portfolio_cover.webp",
        images: [
            "/images/projects/portfolio_1.webp",
            "/images/projects/portfolio_2.webp",
            "/images/projects/portfolio_3.webp",
            "/images/projects/portfolio_4.webp",
            "/images/projects/portfolio_5.webp",
            "/images/projects/portfolio_6.webp",
            "/images/projects/portfolio_7.webp"
        ],
        technologies: [
            { name: "Vite.js", icon: <SiVite /> },
            { name: "Sass", icon: <SiSass /> },
            { name: "Laravel", icon: <SiLaravel /> },
        ],
        link: "https://portfolio.davidwebprojects.fr",
        sections: [
            {
                title: "Mon portfolio version 1",
                content: "Ce portfolio est le reflet de mon parcours et de mon expertise en développement web. Chaque aspect a été pensé et conçu pour mettre en avant mes compétences techniques et ma capacité à créer des solutions digitales modernes et performantes."
            },
            {
                title: "Les projets",
                content: "À travers ce site, je présente les projets que j’ai réalisés ainsi que les technologies que je maîtrise. Il illustre mon approche du développement web, alliant performance, design et optimisation pour répondre aux exigences du numérique."
            },
            {
                title: "Prise de contact",
                content: "Au-delà d’une simple présentation, ce portfolio facilite la prise de contact pour d’éventuelles collaborations ou opportunités professionnelles. Son interface fluide et intuitive permet de naviguer facilement et de découvrir mon travail en toute simplicité."
            },
            {
                title: "Technologies",
                content: "Côté technique, ce projet repose sur React pour une interface dynamique et réactive, et Sass pour un design structuré et maintenable. Le backend est développé avec Laravel, notamment pour la gestion du formulaire de contact, garantissant un traitement sécurisé et optimisé des données. L’ensemble a été conçu avec soin pour allier performance, clarté et efficacité."
            }
        ],
        stats: {
            duration: "2 mois",
            performance: 90
        },
        features: [
            { name: "Interface moderne et responsive", icon: <MdDevices /> },
            { name: "Optimisation SEO avancée", icon: <SiGoogle /> },
            { name: "Formulaire de contact optimisé", icon: <MdContactMail /> },
            { name: "Présentation claire des prestations", icon: <MdViewList /> },
            { name: "Hébergement sécurisé et performant", icon: <MdSecurity /> },
            { name: "Système de gestion de contenu", icon: <CgDatabase /> },
        ],
        type: "full-dev",
    },
    {
        id: 3,
        slug: "portfolio-v2",
        title: "Portfolio V2",
        description: "Application web pour gérer factures et paiements.",
        image: "/images/projects/portfolio_v2_cover.webp",
        images: [
            "/images/projects/portfoliov2_1.webp",
            "/images/projects/portfoliov2_2.webp",
            "/images/projects/portfoliov2_3.webp",
            "/images/projects/portfoliov2_4.webp",
            "/images/projects/portfoliov2_5.webp",
            "/images/projects/portfoliov2_6.webp",
            "/images/projects/portfoliov2_7.webp",
            "/images/projects/portfoliov2_8.webp",
            "/images/projects/portfoliov2_9.webp",
            "/images/projects/portfoliov2_10.webp"
        ],
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Laravel", icon: <SiLaravel /> },
        ],
        sections: [
            {
                "title": "Mon portfolio version 2",
                "content": "Cette nouvelle version de mon portfolio reflète l'évolution de mon expertise et intègre une refonte complète. Elle propose une expérience plus fluide, avec une interface modernisée et des performances optimisées grâce à Next.js, Tailwind et TypeScript. Une administration a également été mise en place pour gérer dynamiquement le contenu."
            },
            {
                "title": "Les projets",
                "content": "Cette version met en avant mes réalisations avec une mise à jour des projets et une organisation plus claire. L’optimisation technique et le design ont été repensés pour une navigation plus intuitive et une meilleure accessibilité, illustrant ainsi mon approche du développement web."
            },
            {
                "title": "Prise de contact",
                "content": "Le formulaire de contact a été amélioré pour une communication plus efficace et sécurisée. Un CTA vers le site freelance davidwebprojects.fr permet d’accéder directement à mes services et de demander un devis en quelques clics, facilitant ainsi les échanges et les opportunités professionnelles."
            },
            {
                "title": "Technologies",
                "content": "Cette nouvelle version repose sur une stack performante : Next.js pour une navigation rapide, Tailwind CSS pour un design épuré, et Laravel avec SQL pour un backend robuste. Une administration complète permet de gérer les contenus dynamiquement, et la mise en conformité RGPD garantit une meilleure gestion des données."
            }

        ],
        stats: { duration: "5 mois", performance: 88 },
        link: "https://portfolio.davidwebprojects.fr/",
        features: [
            { name: "Interface moderne et responsive", icon: <MdDevices /> },
            { name: "Optimisation SEO avancée", icon: <SiGoogleanalytics /> },
            { name: "Espace de contact simplifié", icon: <FaEnvelopeOpenText /> },
            { name: "Suivi des performances", icon: <IoMdAnalytics /> },
            { name: "Tableau de bord interactif", icon: <MdDashboard /> },
            { name: "Sécurisé et rapide", icon: <FaLock /> },
        ],
        type: "full-dev",
    },
    {
        id: 4,
        slug: "office-notarial-le-soler",
        title: "Office Notarial Le Soler",
        description: "Site vitrine développé pour l'Office Notarial Le Soler, mettant en avant ses services et son équipe.",
        image: "/images/projects/cover_soler.webp",
        images: [
            "/images/projects/soler_1.webp",
            "/images/projects/soler_2.webp",
            "/images/projects/soler_3.webp",
            "/images/projects/soler_4.webp",
            "/images/projects/soler_5.webp",
            "/images/projects/soler_6.webp"
        ],
        technologies: [
            { name: "HTML", icon: <SiHtml5 /> },
            { name: "CSS", icon: <SiCss3 /> },
            { name: "PHP", icon: <SiPhp /> },
            { name: "Photoshop", icon: <BsFiletypePsd /> },
        ],
        sections: [
            { title: "Détails du projet", content: "Dans ce projet, j’ai été chargé de l’intégration web à partir d’une maquette fournie au format PSD. La première étape a consisté à analyser cette maquette sous Photoshop afin de bien comprendre le design et les attentes en matière d’interface utilisateur." },
            { title: "L'intégration", content: "Une fois cette analyse réalisée, j’ai traduit le design en code en respectant fidèlement la charte graphique. Pour cela, j’ai utilisé HTML pour structurer le contenu, CSS pour le styliser et PHP pour ajouter des fonctionnalités dynamiques. Cette approche a permis de créer un site interactif et conforme aux standards du web." },
            { title: "La sous-traitance", content: "Ce projet a été réalisé dans le cadre d’une prestation de sous-traitance pour l’agence Paul & Ludo (https://www.paul-ludo.com/), spécialisée dans la conception web et l’identité visuelle. Cette collaboration m’a permis de m’adapter à leur méthodologie et de répondre aux exigences spécifiques du projet." },
            { title: "Le résultat", content: "Tout au long de cette mission, j’ai veillé à assurer une cohérence entre le design initial et l’intégration finale. Cette expérience a renforcé l’importance d’une bonne communication et d’une compréhension claire des objectifs pour mener à bien un projet web." }
        ],
        link: "https://www.notaire-lesoler.fr/",
        stats: { duration: "1 mois", performance: 92 },
        features: [
            { name: "Interface moderne et responsive", icon: <MdDevices /> },
            { name: "Suivi Rigoureux de la Maquette", icon: <RiPencilRuler2Line /> },
            { name: "Collaboration Sous-Traitée", icon: <FaHandshake /> },
            { name: "Espace de contact simplifié", icon: <MdContactMail /> },
            { name: "Page d'accueil immersive", icon: <AiFillHome /> },
            { name: "Photos haute qualité", icon: <FaCameraRetro /> },
        ],
        type: "integration",
    },
    {
        id: 5,
        slug: "le-chateau",
        title: "Le Chateau",
        description: "Projet d'intégration web à partir d’une maquette fournie au format PSD.",
        image: "/images/projects/cover_chateau.webp",
        images: [
            "/images/projects/chateau1.webp",
            "/images/projects/chateau2.webp",
            "/images/projects/chateau3.webp",
            "/images/projects/chateau4.webp",
            "/images/projects/chateau5.webp"

        ],
        technologies: [
            { name: "HTML", icon: <SiHtml5 /> },
            { name: "CSS", icon: <SiCss3 /> },
            { name: "PHP", icon: <SiPhp /> },
            { name: "Photoshop", icon: <BsFiletypePsd /> },
        ],
        sections: [
            {
                title: "Détails du projet",
                content: "Dans le cadre de ce projet, j’ai été en charge de l’intégration web du site 'Le Château' à partir d’une maquette fournie au format PSD. Mon travail a débuté par une analyse détaillée du design sous Photoshop afin de bien cerner les choix graphiques et l’ergonomie souhaitée pour le site."
            },
            {
                title: "L'intégration",
                content: "Après cette phase d’analyse, j’ai procédé à l’intégration en respectant scrupuleusement la charte graphique. J’ai utilisé HTML pour structurer le contenu, CSS pour assurer le rendu visuel conforme aux attentes et PHP pour intégrer des fonctionnalités dynamiques. L’objectif était de garantir un site fluide, intuitif et en adéquation avec l’identité visuelle du projet."
            },
            {
                title: "La sous-traitance",
                content: "Cette mission a été réalisée en sous-traitance pour l’agence Paul & Ludo (https://www.paul-ludo.com/), reconnue pour son expertise en conception web et identité visuelle. Ce projet m’a permis de m’adapter à leur méthodologie et de veiller à ce que chaque détail soit en accord avec leurs standards de qualité."
            },
            {
                title: "Le résultat",
                content: "Tout au long de cette prestation, j’ai mis un point d’honneur à assurer une parfaite cohérence entre la maquette initiale et le rendu final. Ce projet a souligné l’importance d’une communication efficace et d’une exécution rigoureuse pour livrer un site respectant fidèlement les attentes du client."
            }
        ],
        link: "https://www.lechateau-d115.fr/",
        stats: { duration: "3 mois", performance: 95 },
        features: [
            { name: "Design Responsive", icon: <MdDevices /> },
            { name: "Intégration Pixel-Perfect", icon: <FiLayers /> },
            { name: "SEO Optimisé", icon: <SiGoogleanalytics /> },
            { name: "Navigation Intuitive", icon: <MdNavigation /> },
            { name: "Suivi Rigoureux de la Maquette", icon: <RiPencilRuler2Line /> },
            { name: "Collaboration Sous-Traitée", icon: <FaHandshake /> },
        ],
        type: "integration",
    },
    {
        id: 6,
        slug: "garage-auto-street",
        title: "Garage Auto Street",
        description: "Site vitrine automobile avec administration",
        image: "/images/projects/auto_street_cover.webp",
        images: [
            "/images/projects/auto_street_1.webp",
            "/images/projects/auto_street_2.webp",
            "/images/projects/auto_street_3.webp",
            "/images/projects/auto_street_4.webp",
            "/images/projects/auto_street_5.webp"

        ],
        technologies: [
            { name: "Vite.js", icon: <SiVite /> },
            { name: "Sass", icon: <SiSass /> },
            { name: "Laravel", icon: <SiLaravel /> },
        ],
        sections: [
            {
                title: "Détails du projet",
                content: "Ce projet a été conçu et développé entièrement sur mesure en utilisant React, afin de répondre précisément aux besoins spécifiques d'un ami. Chaque composant a été soigneusement élaboré pour garantir une performance optimale et une expérience utilisateur fluide et intuitive."
            },
            {
                title: "Le Backend",
                content: "De plus, la partie back-end est gérée par Laravel, ce qui assure une robustesse et une sécurité accrues, ainsi qu'une intégration harmonieuse entre le client et le serveur."
            },
            {
                title: "L'Admin",
                content: "L'administrateur a la capacité de se connecter de manière sécurisée et d'accéder à une interface dédiée, lui permettant de créer, modifier et supprimer ses fiches produits avec une grande facilité."
            },
            {
                title: "BDD & SQL",
                content: "Cette gestion est rendue possible grâce à une base de données SQL robuste et active, assurant ainsi une gestion efficace et fiable des données produits."
            }
        ],
        link: "https://portfolio.fabwebprojects.fr/autostreet/",
        stats: { duration: "3 mois", performance: 95 },
        features: [
            { name: "Design Responsive", icon: <MdDevices /> },
            { name: "Interface Interactive", icon: <SiTailwindcss /> },
            { name: "SEO Optimisé", icon: <SiGoogleanalytics /> },
            { name: "Navigation Fluide", icon: <MdNavigation /> },
            { name: "Administration Sécurisée", icon: <MdAdminPanelSettings /> },
            { name: "Backend Robuste", icon: <FaServer /> },
        ],
        type: "full-dev",
    },
];
