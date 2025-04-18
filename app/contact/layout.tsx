import { PageLayoutFullScreen } from "@/components/layout/common";
import { PageLayoutProps } from "@/lib/types";

export default function ContactLayout({ children }: PageLayoutProps) {
  return (
    <PageLayoutFullScreen>
      <div className="relative w-full min-h-screen">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 bg-[url('/images/projects/homeBanner.webp')] bg-cover bg-[35%_center] md:bg-[65%_center] bg-no-repeat bg-fixed before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/80 before:via-[#192846]/85 before:to-[#192846]/95" />

        {/* Contenu */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
          {children}
        </div>
      </div>
    </PageLayoutFullScreen>
  );
}
