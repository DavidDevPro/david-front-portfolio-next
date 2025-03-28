"use client";

import { useState } from "react";
import { SidebarAdmin, DashboardHeader, DashboardFooter } from "@/components/layout/admin";
import { PageLayoutProps } from "@/lib/types";

export const PageLayoutDashboardScreen: React.FC<PageLayoutProps> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarAdmin isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Section */}
      <div className={`flex flex-1 flex-col ${isCollapsed ? "md:ml-14" : "md:ml-64"}`}>
        {/* Header commun pour toutes les pages du dashboard */}
        <DashboardHeader />

        {/* Main Content */}
        <main className="flex-1 px-2 sm:px-4 py-4 ">
          {children}
        </main>

        {/* Footer toujours en bas */}
        <DashboardFooter />
      </div>
    </div>
  );
};
