"use client";

import { SiteHeader, SiteFooter } from "@/components/layout/common";
import { PageLayoutProps } from "@/lib/types";

export const PageLayoutScreen: React.FC<PageLayoutProps> = ({
  children,
}) => {
  return (
    <div className=" mt-[100px] flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 flex  relative z-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};
