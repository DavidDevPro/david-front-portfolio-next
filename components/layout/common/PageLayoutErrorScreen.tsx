"use client";
import { PageLayoutProps } from "@/lib/types";
import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";

export const PageLayoutErrorScreen: React.FC<PageLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <SiteHeader />
      <div className="relative z-0 bg-[url('/images/projects/aboutBanner1.webp')] bg-cover bg-no-repeat bg-fixed before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/80 before:via-[#192846]/85 before:to-[#192846]/95 flex flex-col items-center justify-center h-screen">
        <main className="container flex-1 flex flex-col justify-center items-center py-10 relative z-10">
          {children}
        </main>
      </div>
      <SiteFooter />
    </>
  );
};
