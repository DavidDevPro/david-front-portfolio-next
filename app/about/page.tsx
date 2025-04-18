import { AboutPage } from "@/components/about";
import { HeadPages } from "@/components/shared";
import { LiaInfoSolid } from "react-icons/lia";

export default function About() {
  return (
    <div className="relative z-0 bg-[url('/images/projects/aboutBanner1.webp')] bg-cover bg-no-repeat bg-fixed before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/80 before:via-[#192846]/85 before:to-[#192846]/95">
      <div className="relative z-10">
        <HeadPages headText="À Propos de moi" icon={<LiaInfoSolid className="w-10 h-10" />} />
        <AboutPage />
      </div>
    </div>
  );
}
