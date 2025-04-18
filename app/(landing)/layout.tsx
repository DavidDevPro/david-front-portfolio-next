import { PageLayoutFullScreen } from "@/components/layout/common";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default async function LandingLayout({ children }: LandingLayoutProps) {
  return <PageLayoutFullScreen>{children}</PageLayoutFullScreen>;
}
