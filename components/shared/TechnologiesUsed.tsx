import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { FaLaptopCode } from "react-icons/fa";
import { TechnologiesUsedComponentProps } from "@/lib/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TechnologiesUsed: React.FC<TechnologiesUsedComponentProps> = ({
  technologies,
  className,
  gradientClassNames,
}) => {
  return (
    <section
      id="technologies"
      className={cn(
        "py-10 bg-secondary/90 border shadow-gray-600/50 border-gray-700 shadow-sm rounded-xl text-center lg:text-left",
        className
      )}
    >
      <h3 className="text-accent ml-4 font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold inline-flex items-center gap-x-4 mb-4">
        <FaLaptopCode
          className="animate-contactLogo h-10 w-10 shrink-0 text-card"
          style={{ animationDuration: "10s" }}
        />
        Technologies utilisées
      </h3>
      <div className="relative mt-4">
        <Marquee className="max-w-full [--duration:30s] flex gap-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 px-4 py-2 border border-gray-700 text-gray-100 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all"
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                {React.cloneElement(tech.icon, {
                  className: "w-4 h-4 2xl:w-10 2xl:h-10 text-accent",
                })}
              </motion.span>
              <span className="text-xs font-medium text-gray-300">{tech.name}</span>
            </div>
          ))}
        </Marquee>

        {/* Divs pour les dégradés, avec les classes personnalisées via `gradientClassNames` */}
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-secondary/90",
            gradientClassNames
          )}
        ></div>
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 h-full w-1/4 bg-gradient-to-l from-secondary/90",
            gradientClassNames
          )}
        ></div>
      </div>
    </section>
  );
};


