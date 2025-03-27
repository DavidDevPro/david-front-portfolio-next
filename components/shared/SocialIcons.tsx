import { socialMediaIcons } from "@/lib/data/socialLinks";
import { SocialIconsProps } from "@/lib/types";

export const SocialIcons: React.FC<SocialIconsProps> = ({
  iconSize = "w-5 h-5",
  spaceBetween = "space-x-4",
  containerClassName = "",
  iconClassName = ""
  ,

  align = "center",
}) => {
  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <div
      className={`flex ${justifyClass} ${spaceBetween} ${containerClassName}`}
    >
      {socialMediaIcons.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            className={iconClassName}
            target="_blank"
            rel="noreferrer noopener"
            title={`lien vers ${social.title}`}
            aria-label={`Suivez-moi sur ${social.label}`}
          >
            <IconComponent className={iconSize} />
            <span className="sr-only">{social.title}</span>
          </a>
        );
      })}
    </div>
  );
};
