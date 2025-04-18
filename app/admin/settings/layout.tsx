// app/settings/layout.tsx
import { PageLayoutSettingsScreen } from "@/components/layout/admin";
import { PageLayoutProps } from "@/lib/types";

export default function SettingsLayout({ children }: PageLayoutProps) {
  return (
    <PageLayoutSettingsScreen>
      {children}
    </PageLayoutSettingsScreen>
  );
}
