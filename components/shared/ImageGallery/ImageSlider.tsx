"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { ImageSliderProps } from "@/lib/types";

export const ImageSlider = ({
    images,
    currentIndex,
    isMobile,
    title,
    onNext,
    onPrev,
    onToggleFullScreen,
    onSelect,
}: ImageSliderProps) => {
    // 🔹 Défilement automatique toutes les 3 secondes
    useEffect(() => {
        // Si on a plus d'une image, on lance le timer
        if (images.length > 1) {
            const interval = setInterval(() => {
                onNext();
            }, 3000); // ⇨ Défilement automatique toutes les 3s

            // Nettoie l'interval quand le composant se démonte
            return () => clearInterval(interval);
        }
    }, [images.length, onNext]);

    return (
        <div className="relative w-full">
            <div className="relative overflow-hidden rounded-lg cursor-pointer">
                <div className="relative w-full h-[650px] border border-gray-600 py-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700  flex items-center justify-center">
                    <Image
                        src={images[currentIndex].src}
                        alt={`${title} - Image ${currentIndex + 1}`}
                        width={1200}
                        height={600}
                        className="object-cover object-top h-[650px] rounded-lg"
                    />
                </div>

                {/* Bouton de plein écran désactivé sur mobile */}
                {!isMobile && (
                    <button
                        className="absolute top-3 right-3 bg-black/50 text-secondary p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
                        onClick={onToggleFullScreen}
                        aria-label="Agrandir l'image"
                    >
                        <Maximize className="h-5 w-5" />
                    </button>
                )}
            </div>

            {/* Flèches de navigation */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={onPrev}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900/50 text-secondary p-3 rounded-full shadow-md hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                        aria-label="Image précédente"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={onNext}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900/50 text-secondary p-3 rounded-full shadow-md hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                        aria-label="Image suivante"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </>
            )}

            {/* Description de l’image */}
            {images[currentIndex].description && (
                <span className="absolute bottom-3 left-3 bg-black/70 text-secondary px-4 py-2 rounded-md text-sm shadow-md">
                    {images[currentIndex].description}
                </span>
            )}

            {/* Dots d’indicateurs (uniquement si plusieurs images) */}
            {images.length > 1 && (
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onSelect(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-primary scale-125"
                                : "bg-gray-500"
                                }`}
                            aria-label={`Aller à l'image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

