import { MentionSections } from "@/components/legal";

export default async function Page() {
  return (
    <div className="relative z-0 bg-[url('/images/projects/projectBanner.webp')] bg-cover bg-no-repeat bg-fixed before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#192846]/80 before:via-[#192846]/85 before:to-[#192846]/95">
      <div className="relative z-10">
        <MentionSections />
      </div>
    </div>
  );
}
