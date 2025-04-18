import { TechnologiesUsed } from "@/components/shared";
import { FaGithub, FaLaravel, FaReact, FaSass } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { aboutText } from "@/lib/data/common/aboutText";



export const AboutMain = () => {
  return (
    <div className="bg-secondary/90 py-10 px-3 sm:px-6 md:px-8 rounded-2xl border shadow-gray-600/50 border-gray-700 shadow-md">
      <h3 className="font-montserrat text-center lg:text-left text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-accent">
        Développeur Front-End
      </h3>
      {aboutText.map((text, index) => (
        <p key={index} className="mb-4 sm:mb-6 text-background text-center lg:text-left leading-relaxed text-sm sm:text-base md:text-lg">
          {text}
        </p>
      ))}
      <div className="mt-12">
        <TechnologiesUsed technologies={[
          { name: "Sass", icon: <FaSass /> },
          { name: "Node.jS", icon: <TbBrandNodejs /> },
          { name: "JS", icon: <IoLogoJavascript /> },
          { name: "Github", icon: <FaGithub /> },
          { name: "React.JS", icon: <FaReact /> },
          { name: "Next.JS", icon: <SiNextdotjs /> },
          { name: "Tailwind", icon: <RiTailwindCssLine /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "Laravel", icon: <FaLaravel /> },
        ]} />
      </div>
    </div>
  );
};