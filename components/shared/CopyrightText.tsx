import { APP_NAME, Config } from "@/config/config";
import { CopyrightTextProps } from "@/lib/types";
import { getYearText } from "@/lib/utils";

export const CopyrightText: React.FC<CopyrightTextProps> = ({ className }) => {
  const yearText = getYearText();

  return (
    <div
      className={`block text-accent tracking-widest dark:text-neutral-400 ${className}`}
    >
      <span className="block md:inline">
        Copyright &copy; {yearText} {APP_NAME}
      </span>
      <span className="block md:inline"> - Tous Droits Réservés - </span>
      <span className="block md:inline">
        Version {Config.version} du {Config.releaseDate}
      </span>
      <span className="block md:inline ml-[2px]">
      </span>
    </div>
  );
};
