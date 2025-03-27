"use client";

import { useState } from "react";
import { NavBar } from "@/components/layout/common";

export const SiteHeader: React.FC = () => {
  const [mode] = useState<"light" | "dark">("dark");
  return (
    <header
      className={`${mode === "light" ? "shadow-light" : "shadow-dark"
        } h-[100px] flex items-center fixed top-0 left-0 w-full z-50 bg-secondary shadow-sm shadow-gray-500/50 border-gray-100`}
    >
      <div className="container mx-auto max-w-screen-3xl flex justify-between items-center px-4 py-4 ">
        <NavBar />
      </div>
    </header>
  );
};
