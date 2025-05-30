import { AuthSection } from "@/components/auth";

export default function ForgotPasswordPage() {
  return (
    <section className="flex-grow flex items-center justify-center px-3">
      <AuthSection formType="forgot-password" />
    </section>
  );
}

