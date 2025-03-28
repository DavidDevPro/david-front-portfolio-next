"use client";

import { AuthSection } from "@/components/auth";
import { usePathname } from "next/navigation"; // Utiliser usePathname pour récupérer le chemin

export default function ResetPasswordPage() {
  const pathname = usePathname(); // Obtenir le chemin de l'URL
  const parts = pathname.split("/"); // Diviser le chemin par les slashes

  // Vérifier si le chemin contient exactement 4 parties (3 slashes)
  if (parts.length === 4) { // 4 parties + 1 vide au début
    const token = parts[2]; // Le token est la troisième partie
    const encodedEmail = parts[3]; // L'email encodé est la quatrième partie

    // Décoder l'email
    const email = decodeURIComponent(atob(encodedEmail)); // Décoder l'email

    return (
      <section className="-mt-[100px] flex-grow flex items-center justify-center px-2">
        <AuthSection formType="reset-password" token={token} email={email} />
      </section>
    );
  }

  return (
    <section className="-mt-[100px] flex-grow flex items-center justify-center px-2">
      <p>Invalid URL</p> {/* Gérer les URL invalides */}
    </section>
  );
}
