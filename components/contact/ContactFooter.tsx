"use client";

import { GoogleCalendarModal } from "@/components/shared";

export const ContactFooter: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-secondary text-lg font-semibold mb-4 text-center">{`Besoin d'un échange téléphonique ?`}</h3>
      <GoogleCalendarModal />
    </div>
  );
};
