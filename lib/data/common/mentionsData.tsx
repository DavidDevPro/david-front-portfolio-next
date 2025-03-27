import { Mail, Globe, MapPin } from 'lucide-react';
import { FaServer, FaShieldAlt, FaHammer } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import { BsBuildingsFill, BsImages } from "react-icons/bs";
import { MdContactMail } from 'react-icons/md';
import { APP_ADRESS2, APP_MAIL } from '@/config/config';
import { legalInfo, contactInfo } from '@/lib/data/common/contactAndLegalData';
import Link from 'next/link';

export type MentionContent = {
  title: string;
  description: JSX.Element;
  icon: JSX.Element;
};

export const mentionsContent: MentionContent[] = [
  {
    title: "Identification de l'Entreprise",
    description: (
      <div className="flex flex-col gap-3">
        {legalInfo.map((detail, index) => (
          <div key={index} className="mb-1 ml-2">
            <div className="flex items-center">
              {detail.icon && <detail.icon className="w-6 h-6 min-w-6 min-h-6 text-accent mr-2 shrink-0" aria-hidden="true" />}
              <strong>{detail.label} :</strong>
            </div>
            <div className="ml-8">
              {detail.isLink ? (
                <a href={detail.link} className="text-primary hover:underline">
                  {detail.text}
                </a>
              ) : (
                <span>{detail.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
    icon: <BsBuildingsFill className="inline w-12 h-12 min-w-12 min-h-12 p-2 text-secondary/90 shrink-0" aria-hidden="true" />
  },
  {
    title: "Contact",
    description: (
      <div className="flex flex-col gap-3"> {/* Utilisation de flex-col pour une disposition verticale avec espacement */}
        {contactInfo
          .filter((info) => info.text !== APP_ADRESS2) // Exclure APP_ADRESS2 de la boucle
          .map((info, index) => (
            <div key={index} className="mb-1 ml-2"> {/* Ajout d'un espace sous chaque bloc */}
              <div className="flex items-center"> {/* Première ligne : icône + texte */}
                {info.icon && <info.icon className="w-6 h-6 min-w-6 min-h-6 text-accent mr-2 shrink-0" aria-hidden="true" />}
                <strong>{info.label} :</strong>
              </div>
              <div className="ml-8"> {/* Deuxième ligne : valeur */}
                {info.text}
              </div>
            </div>
          ))}
      </div>
    ),
    icon: <MdContactMail className="inline w-12 h-12 min-w-12 min-h-12 p-2 text-secondary/90 shrink-0" aria-hidden="true" />
  },
  {
    title: "Hébergement",
    description: (
      <div className="flex flex-col gap-3">
        <div className="mb-1 ml-2">
          <strong>Serveur Hébergé Dédié Infomaniak + Domaine chez OVH</strong>
        </div>
        <div className="mb-1 ml-2">
          <div className="flex items-center">
            <MapPin className="w-6 h-6 min-w-6 min-h-6 text-accent mr-2 shrink-0" aria-hidden="true" />
            <strong>Adresse :</strong>
          </div>
          <div className="ml-8">
            Les Acacias, Genève, Suisse
          </div>
        </div>
        <div className="mb-1 ml-2">
          <div className="flex items-center">
            <Mail className="w-6 h-6 min-w-6 min-h-6 text-accent mr-2 shrink-0" aria-hidden="true" />
            <strong>Contact :</strong>
          </div>
          <div className="ml-8">
            <a href={`mailto:${APP_MAIL}`} className="text-accent hover:underline text-base sm:text-lg">
              {APP_MAIL}
            </a>
          </div>
        </div>
        <div className="mb-1 ml-2">
          <div className="flex items-center">
            <Globe className="w-6 h-6 min-w-6 min-h-6 text-accent mr-2 shrink-0" aria-hidden="true" />
            <strong>URL du site web :</strong>
          </div>
          <div className="ml-8">
            <a href="https://davidwebprojects.fr" target="_blank" rel="noopener noreferrer" className=" text-base sm:text-lg text-accent hover:underline">
              https://portfolio.davidwebprojects.fr
            </a>
          </div>
        </div>
      </div>
    ),
    icon: <FaServer className="inline w-12 h-12 min-w-12 min-h-12 p-2 text-secondary/90 shrink-0" aria-hidden="true" />
  },
  {
    title: "Propriété Intellectuelle",
    description: (
      <div>
        <p>
          Tout le contenu du site, y compris mes projets, designs et illustrations, est protégé par les lois sur la propriété intellectuelle. Toute reproduction ou diffusion sans mon autorisation est interdite.
        </p>
      </div>
    ),
    icon: <BsImages className="inline w-12 h-12 min-w-12 min-h-12 p-2 text-secondary/90 shrink-0" aria-hidden="true" />
  },
  {
    title: "Limitation de Responsabilité",
    description: (
      <div>
        <p>
          <strong>David CHANGEA</strong> {`met tout en œuvre pour assurer la précision des informations présentes sur ce site. Toutefois, aucune garantie n'est donnée quant à leur exactitude ou à l'exhaustivité. Je ne pourrai être tenu responsable des erreurs ou omissions dans les informations fournies.`}
        </p>
      </div>
    ),
    icon: <FaHammer className="inline w-12 h-12 min-w-12 min-h-12 p-2 text-secondary/90 shrink-0" aria-hidden="true" />
  },
  {
    title: "Cookies et Confidentialité",
    description: (
      <div>
        <p>
          {`Ce site utilise des cookies uniquement à des fins de fonctionnement et d'amélioration de l'expérience utilisateur. Aucune donnée personnelle n'est collectée à des fins commerciales.`}
        </p>
      </div>
    ),
    icon: <IoSettingsOutline className="inline w-12 h-12 min-w-12 min-h-12 p-2 text-secondary/90 shrink-0" aria-hidden="true" />
  },
  {
    title: "Politique de Confidentialité",
    description: (
      <div>
        <p>
          <strong>David CHANGEA</strong> respecte la confidentialité de ses visiteurs. Pour plus de détails, veuillez consulter la{" "}
          <Link href="/rgpd" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            politique de confidentialité
          </Link>.
        </p>
      </div>
    ),
    icon: <FaShieldAlt className="inline w-12 h-12 min-w-12 min-h-12 p-2 text-secondary/90 shrink-0" aria-hidden="true" />
  },
];
