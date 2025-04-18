import { toast } from "sonner";
import { MdCheckCircle, MdError } from "react-icons/md";

// Définir un type pour les messages de toast
type ToastType = "success" | "error";

// Fonction utilitaire générique pour afficher les toasts
export const showToast = (type: ToastType, message: string) => {
  const IconComponent = type === "success" ? MdCheckCircle : MdError;
  const colorClass = type === "success" ? "checkgreen" : "checkred";

  toast("", {
    description: (
      <div className="flex items-center text-lg lg:text-base">
        <IconComponent className={`mr-2 ${colorClass} w-5 h-5 shrink-0`} aria-hidden="true" />
        <span>{message}</span>
      </div>
    ),
  });
};
