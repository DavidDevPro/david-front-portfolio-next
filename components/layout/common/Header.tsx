"use client";

import { useEffect, useState } from "react";
import { NavBar } from "@/components/layout/common";

export const SiteHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-[100px] flex items-center bg-secondary shadow-md shadow-gray-500/40 border-b border-gray-500 transition-opacity duration-300 ease-out
        ${scrolled ? "opacity-95 backdrop-blur-lg" : "opacity-100"}
      `}
    >
      <div className="container mx-auto max-w-screen-3xl flex justify-between items-center px-4 py-4">
        <NavBar />
      </div>
    </header>
  );
};
