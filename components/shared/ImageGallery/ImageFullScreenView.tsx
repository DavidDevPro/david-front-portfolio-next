import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageFullScreenViewProps } from "@/lib/types";


export const ImageFullScreenView = ({
    images,
    currentIndex,
    onClose,
    onNext,
    onPrev,
    onSelect,
    title,
}: ImageFullScreenViewProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center z-50 transition-all duration-300 p-4">
            {/* Bouton de fermeture */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 bg-gray-800/70 hover:bg-gray-600 p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Fermer l'image en grand"
            >
                <X className="h-8 w-8 text-secondary shrink-0" />
            </button>

            {/* Indicateur du numéro d'image */}
            <span className="absolute top-6 left-6 text-secondary bg-gray-800/70 px-4 py-2 rounded-lg text-sm">
                {currentIndex + 1} / {images.length}
            </span>

            {/* Image en plein écran */}
            <div className="relative">
                <Image
                    src={images[currentIndex].src}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    width={1200}
                    height={800}
                    className="object-contain max-h-screen transition-opacity duration-500 ease-in-out rounded-lg"
                />

                {images[currentIndex].description && (
                    <span className="absolute bottom-3 left-3 bg-black/70 text-secondary px-4 py-2 rounded-md text-sm shadow-md">
                        {images[currentIndex].description}
                    </span>
                )}
            </div>

            {/* Flèches de navigation */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={onPrev}
                        className="absolute left-8 bg-gray-800/70 hover:bg-gray-600 p-4 rounded-full shadow-lg transition-all duration-300"
                        aria-label="Image précédente"
                    >
                        <ChevronLeft className="h-8 w-8 text-secondary" />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-8 bg-gray-800/70 hover:bg-gray-600 p-4 rounded-full shadow-lg transition-all duration-300"
                        aria-label="Image suivante"
                    >
                        <ChevronRight className="h-8 w-8 text-secondary" />
                    </button>
                </>
            )}

            {/* Dots d’indicateurs */}
            {images.length > 1 && (
                <div className="absolute bottom-6 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onSelect(index)}
                            className={`w-5 h-5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary scale-125" : "bg-gray-500"
                                }`}
                            aria-label={`Aller à l'image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
