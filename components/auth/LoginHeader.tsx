"use client";

import Image from "next/image";
import { APP_NAME } from "@/config/config";

export const LoginHeader = () => {
    return (
        <div className="flex justify-center mb-4">
            <div className="relative">
                <Image
                    src="/images/logos/logo.png"
                    alt={`${APP_NAME} - Logo de la page de connexion`}
                    width={80} // Agrandir légèrement
                    height={80}
                    className="mt-2 rounded-xl w-auto h-auto"
                />
            </div>
        </div>
    );
};