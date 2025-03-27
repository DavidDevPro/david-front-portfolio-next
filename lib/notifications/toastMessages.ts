// notifications/toastMessages.ts

import { showToast } from "@/lib/notifications/toastUtils";

// Fonctions spécifiques pour les toasts
export const showFormSuccess = (message: string) => {
  showToast("success", message);
};

export const showFormError = (message: string) => {
  showToast("error", message);
};