import { Suspense } from "react";
import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";
import { PageLayoutProps } from "@/lib/types";

export const PageLayoutFullScreen: React.FC<PageLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <SiteHeader />
      <main className="flex justify-center items-center">{children}</main>
      <Suspense fallback={<div>Chargement...</div>}></Suspense>
      <SiteFooter />
    </>
  );
};
