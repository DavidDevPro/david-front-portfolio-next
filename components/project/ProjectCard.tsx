"use client";
import Image from "next/image";
import { PrimaryButton } from "@/components/shared";
import { useState } from "react";
import { ProjectFilter } from "@/components/project";
import Link from "next/link";
import { Project, projects } from "@/lib/data/common/projects";

export function ProjectCard() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const handleFilterChange = (type: "all" | "integration" | "full-dev") => {
    if (type === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.type === type));
    }
  };

  return (
    <>
      <ProjectFilter onFilterChange={handleFilterChange} />
      <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 px-4">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className=""
          >
            <div className="relative z-0 bg-[url('/images/projects/projectBanner.webp')] bg-cover before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/60 before:via-[#192846]/70 before:to-[#192846]/80 w-full max-w-lg border border-gray-300/50 rounded-2xl shadow-md shadow-gray-500/50 transition-all duration-300 flex flex-col overflow-hidden mx-auto cursor-pointer h-full">
              {/* Conteneur Image avec l'effet Scale appliqué uniquement à l'image */}
              < div className="relative w-full h-[400px] overflow-hidden cursor-pointer" >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-semibold text-center text-card">{project.title}</h3>

                {/* Bouton CTA */}
                {project.link && (
                  <PrimaryButton
                    variant="thirdPortfolio"
                    className="py-6 mt-6 max-w-[225px] md:max-w-[250px] lg:max-w-[275px] mx-auto"
                  >
                    <Image
                      src="/images/icons/arrowButton.png"
                      alt={"image d'une flèche"}
                      width={64}
                      height={64}
                      loading="eager"
                      priority
                      className="animate-arrowButton mr-2 text-accent shrink-0 w-[30px] h-[30px]"
                      style={{ animationDuration: "12s" }} />
                    Voir le projet
                  </PrimaryButton>
                )}
              </div>
            </div >
          </Link>
        ))}
      </div>
    </>
  );
}





