import { StatisticsSection } from "@/components/dashboard";

export default async function Page() {

  return (
    <div className="w-full h-full overflow-auto rounded-lg border bg-card text-card-foreground shadow-sm p-4">
      <StatisticsSection />
    </div>
  );
}