"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectSliderProps } from "@/lib/types";

export const ProjectSlider: React.FC<ProjectSliderProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Défilement toutes les 10s

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="px-4 md:px-6 max-w-[1200px] h-[600px]  w-full mx-auto">
      <div className="relative  w-full h-full  rounded-xl overflow-hidden border border-card shadow-md shadow-gray-400/50">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={title}
            width={1200}
            height={600}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide} // ⬅️ Ajouté ici
          className="group absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 bg-secondary/90 text-card p-2 rounded-full hover:bg-secondary border-2 border-accent shadow-sm shadow-gray-400/50 transition-transform duration-200"
        >
          <div className="group-hover:scale-105 transition-transform duration-200">
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
          </div>
        </button>

        <button
          onClick={nextSlide} // ⬅️ Ajouté ici
          className="group absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 bg-secondary/90 text-card p-2 rounded-full hover:bg-secondary border-2 border-accent shadow-sm shadow-gray-400/50 transition-transform duration-200"
        >
          <div className="group-hover:scale-105 transition-transform duration-200">
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
          </div>
        </button>

        {/* Compteur d'images */}
        <div className="absolute bottom-5 left-5 text-card border border-accent text-md md:text-lg font-medium z-10 bg-secondary/90 px-4 py-1 rounded-lg shadow-md shadow-gray-500/50">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};


