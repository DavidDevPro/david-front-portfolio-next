import { cn } from "@/lib/utils";
import { HeadPagesProps } from "@/lib/types";

export const HeadPages: React.FC<HeadPagesProps> = ({ headText, icon, className }) => {
  return (
    <div className={cn("w-full flex border-b border-dashed border-accent", className)}>
      <div className="container w-full flex items-center justify-between py-4">
        <h2 className="text-accent text-3xl font-medium">{headText}</h2>
        <span
          className="animate-glowPulse p-3 rounded-full border border-accent flex items-center justify-center bg-secondary shadow-lg"
          style={{ animationDuration: "12s" }}
        >
          <span
            className="animate-floatSpin text-accent text-3xl"
            style={{ animationDuration: "12s" }}
          >
            {icon}
          </span>
        </span>
      </div>
    </div>
  );
};





