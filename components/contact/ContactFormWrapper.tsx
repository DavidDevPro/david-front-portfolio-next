"use client";

import { ContactForm } from "@/components/contact";

export const ContactFormWrapper: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-center text-secondary">Formulaire de contact</h2>
      <ContactForm />
    </div>
  );
};