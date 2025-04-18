import { projects } from "@/lib/data/common/projects";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/project";
import { HeadPages } from "@/components/shared";
import { FaFileWaveform } from "react-icons/fa6";

type Params = Promise<{ projectsname: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
    const { projectsname } = await params; // ✅ On attend `params` avant de l'utiliser

    let project;

    try {
        // Recherche du projet correspondant
        project = projects.find((p) => p.slug === projectsname);
    } catch (error) {
        console.error("Erreur lors de la récupération du projet :", error);
        notFound(); // Redirection 404 en cas d'erreur
    }

    // Si le projet n'est pas trouvé, redirection vers 404
    if (!project) {
        notFound();
    }

    return (
        <div className="relative z-0 bg-[url('/images/projects/oneProjectBanner.webp')] bg-cover bg-fixed before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/80 before:via-[#192846]/85 before:to-[#192846]/95">
            <div className="relative z-10">
                <HeadPages headText={project.title} icon={< FaFileWaveform className="w-10 h-10" />} />
                <ProjectDetailPage project={project} />
            </div>
        </div>

    );
}
