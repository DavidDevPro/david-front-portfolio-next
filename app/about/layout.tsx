import { PageLayoutScreen } from "@/components/layout/common";
import { LandingLayoutProps } from "@/lib/types";


export default async function AboutLayout({ children }: LandingLayoutProps) {
  return <PageLayoutScreen>{children}</PageLayoutScreen>;
}