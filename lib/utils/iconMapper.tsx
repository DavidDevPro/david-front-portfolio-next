import * as SiIcons from "react-icons/si";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";


/**
 * Convertit un nom d'icône en composant React dynamiquement.
 *
 * @param iconName Nom de l'icône (ex: "SiVite", "LuCompass", ...)
 * @returns Composant JSX de l'icône ou fallback
 */
export const iconMapper = (iconName: string): JSX.Element => {
    const icon =
        (SiIcons as Record<string, React.ElementType>)[iconName] ||
        (LuIcons as Record<string, React.ElementType>)[iconName] ||
        (PiIcons as Record<string, React.ElementType>)[iconName] ||
        (FaIcons as Record<string, React.ElementType>)[iconName] ||
        (MdIcons as Record<string, React.ElementType>)[iconName] ||
        (BsIcons as Record<string, React.ElementType>)[iconName] ||
        (RiIcons as Record<string, React.ElementType>)[iconName] ||
        (AiIcons as Record<string, React.ElementType>)[iconName] ||
        (BiIcons as Record<string, React.ElementType>)[iconName];

    if (!icon) {
        console.warn(`Icône "${iconName}" non trouvée.`);
        return <span className="text-red-500">❓</span>;
    }

    const IconComponent = icon;
    return <IconComponent className="h-6 w-6 shrink-0" />;
};
