import { ProjectPage } from "@/components/project";
import { HeadPages } from "@/components/shared";
import { FaComputer } from "react-icons/fa6";

export default function Project() {
  return (
    <div className="relative z-0 bg-[url('/images/projects/projectBanner.webp')] bg-cover bg-fixed before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/80 before:via-[#192846]/85 before:to-[#192846]/95 h-full">
      <div className="relative z-10">
        <HeadPages headText="Mes projets" icon={< FaComputer className="w-10 h-10" />} />
        <ProjectPage />
      </div>
    </div>
  );
}
