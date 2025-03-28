import { AuthSection } from "@/components/auth";

export default function LoginPage() {
  return (
    <section className="flex-grow flex items-center justify-center">
      <AuthSection formType="login" />
    </section>
  );
}