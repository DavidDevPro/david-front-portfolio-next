import { PageLayoutScreen } from "@/components/layout/common";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default async function AboutLayout({ children }: LandingLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}