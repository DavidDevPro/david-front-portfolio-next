'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/store";
import { Toaster } from "@/components/ui/sonner";
import { LoaderIcon } from "lucide-react";

export default function ClientOnlyWrapper({ children }: { children: React.ReactNode }) {
  const { isClientLoaded, loadTokenFromCookies } = useAuthStore();
  const pathname = usePathname();

  // 🔁 Appliquer dynamiquement le thème selon la route
  useEffect(() => {
    const isAdminTheme = pathname.startsWith("/admin");
    const theme = isAdminTheme ? "admin" : "portfolio";
    document.documentElement.setAttribute("data-theme", theme);
  }, [pathname]);

  useEffect(() => {
    loadTokenFromCookies();
  }, [loadTokenFromCookies]);

  if (!isClientLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderIcon /> {/* remplace par ton composant de chargement personnalisé */}
      </div>
    );
  }
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
