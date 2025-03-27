import { FaUserShield, FaFileAlt, FaUserSecret, FaLock } from "react-icons/fa";
import { IoMdAnalytics, IoMdCheckmarkCircle } from "react-icons/io";
import { AiFillSecurityScan } from "react-icons/ai";
import { APP_MAIL } from "@/config/config";

// Définition du type pour chaque section de la politique de confidentialité
export type PrivacyContent = {
  title: string;
  content: JSX.Element;
  icon: JSX.Element;
};

// Contenu de la politique de confidentialité
export const privacyContent: PrivacyContent[] = [
  {
    title: "Introduction",
    content: (
      <p>
        {`Je prends très au sérieux la protection de vos données personnelles.
        Cette politique de confidentialité décrit quelles informations sont collectées, comment elles sont utilisées,
        et quels sont vos droits conformément au Règlement Général sur la Protection des Données (RGPD).`}
      </p>
    ),
    icon: <FaUserShield className="text-secondary/90 w-12 h-12 p-2 shrink-0" aria-hidden="true" />
  },
  {
    title: "Données collectées",
    content: (
      <>
        <p className="mb-4 text-card">Je peux être amené à collecter et traiter les types de données suivants :</p>
        <ul className="list-none text-base text-card space-y-2">
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>Identité et contact : nom, prénom, adresse e-mail via le formulaire de contact.</span>
          </li>
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>Données de navigation : adresse IP, type de navigateur, pages consultées.</span>
          </li>
        </ul>
      </>
    ),
    icon: <IoMdAnalytics className="text-secondary/90 w-12 h-12 p-2 shrink-0" />
  },
  {
    title: "Utilisation des données",
    content: (
      <>
        <p className="mb-4 text-card">Vos données sont utilisées exclusivement pour :</p>
        <ul className="list-none text-base text-card space-y-2">
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>Répondre à vos demandes via le formulaire de contact.</span>
          </li>
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>{`Améliorer la navigation et l'expérience utilisateur sur le site.`}</span>
          </li>
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>Respecter mes obligations légales et réglementaires.</span>
          </li>
        </ul>
      </>
    ),
    icon: <FaFileAlt className="text-secondary/90 w-12 h-12 p-2 shrink-0" />
  },
  {
    title: "Partage des données",
    content: (
      <p>{`
        Vos données personnelles ne sont jamais vendues. Elles peuvent être partagées uniquement avec des prestataires techniques assurant
        l'hébergement et la maintenance du site, et uniquement dans le cadre de la finalité mentionnée.`}
      </p>
    ),
    icon: <FaUserSecret className="text-secondary/90 w-12 h-12 p-2 shrink-0" />
  },
  {
    title: "Sécurité des données",
    content: (
      <p>{`
        Je mets en place des mesures de sécurité adaptées pour protéger vos données contre tout accès non autorisé, perte ou altération.
        Ces mesures incluent notamment des protocoles de chiffrement et des accès restreints aux données personnelles.`}
      </p>
    ),
    icon: <FaLock className="text-secondary/90 w-12 h-12 p-2 shrink-0" />
  },
  {
    title: "Vos droits",
    content: (
      <>
        <p className="mb-4 text-card">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-none text-base text-card space-y-2">
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>{`Droit d'accès, de rectification et de suppression de vos données.`}</span>
          </li>
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>Droit à la portabilité de vos données.</span>
          </li>
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>{`Droit d'opposition au traitement de vos données.`}</span>
          </li>
          <li className="flex items-center">
            <IoMdCheckmarkCircle className="text-accent h-4 w-4 mr-2 shrink-0" />
            <span>Droit de déposer une plainte auprès de la CNIL.</span>
          </li>
        </ul>
        <p className="mt-4 text-card">
          {` Vous pouvez exercer ces droits en me contactant à l'adresse suivante :`}{" "}
          <a
            href={`mailto:${APP_MAIL}`}
            className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {APP_MAIL}
          </a>
        </p>
      </>
    ),
    icon: <AiFillSecurityScan className="text-secondary/90 w-12 h-12 p-2 shrink-0" />
  },
  {
    title: "Modifications de la politique",
    content: (
      <p>
        Cette politique peut être mise à jour à tout moment. Les changements seront publiés sur cette page et vous
        serez invité à les consulter régulièrement.
      </p>
    ),
    icon: <FaFileAlt className="text-secondary/90 w-12 h-12 p-2 shrink-0" />
  },
];

