"use client";

import {
    Dialog,
    DialogOverlay,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

export interface ImageUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUpload: (file: File, description: string) => void;
}

export const ImageUploadModal = ({ isOpen, onClose, onUpload }: ImageUploadModalProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState("");

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] }, maxFiles: 1 });

    const handleConfirm = () => {
        if (file && description.trim()) {
            onUpload(file, description);
            setFile(null);
            setDescription("");
            onClose();
        }
    };

    const handleRemove = () => {
        setFile(null);
        setDescription("");
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay />
            <DialogContent>
                <DialogTitle>Ajouter une image</DialogTitle>
                <DialogDescription>Ajoutez une image avec une description obligatoire.</DialogDescription>

                {/* Zone Drag & Drop */}
                <div
                    {...getRootProps()}
                    className={`mt-4 border-2 border-dashed rounded-md p-6 text-center cursor-pointer ${isDragActive ? 'border-blue-500' : 'border-gray-300'}`}
                >
                    <input {...getInputProps()} />
                    {file ? (
                        <div className="relative inline-block">
                            <Image
                                src={URL.createObjectURL(file)}
                                alt="aperçu"
                                width={150}
                                height={100}
                                className="rounded shadow-md"
                            />
                            <button
                                onClick={handleRemove}
                                className="absolute top-[-10px] right-[-10px] bg-white text-red-600 rounded-full shadow p-1"
                                aria-label="Supprimer l'image"
                            >
                                <IoMdClose className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <p>Glissez une image ici, ou cliquez pour en sélectionner une</p>
                    )}
                </div>

                {/* Champ Description */}
                <div className="mt-4">
                    <label htmlFor="description" className="block mb-1 font-medium">
                        {`Description de l'image`}
                    </label>
                    <Input
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Entrez une description"
                    />
                </div>

                <DialogFooter className="flex sm:justify-center mt-6 gap-4">
                    <Button variant="outline" onClick={onClose}>
                        Annuler
                    </Button>
                    <Button onClick={handleConfirm} disabled={!file || !description.trim()}>
                        Enregistrer
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
