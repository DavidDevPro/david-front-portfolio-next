import { PageLayoutScreen } from "@/components/layout/common";
import { LandingLayoutProps } from "@/lib/types";

export default async function ProjectLayout({ children }: LandingLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}