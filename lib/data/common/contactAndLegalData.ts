// contactAndLegalData.ts
import { FaRegEnvelope, FaRegBuilding } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { FiMapPin,FiPhone } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { APP_NAME, APP_DEV, APP_MAIL, APP_ADRESS, APP_ADRESS2,APP_ADRESS3, APP_TEL, APP_STATUS, APP_SIRET } from "@/config/config";
import { ContactInfoItem, LegalInfoItem } from "@/lib/types";

// Informations de contact
export const contactInfo: ContactInfoItem[] = [
  {
    label: "Email",
    icon: FaRegEnvelope,
    text: APP_MAIL,
    text2: "",
  },
  {
    label: "Téléphone",
    icon: FiPhone,
    text: APP_TEL,
    text2: "",
  },
  {
    label: "",
    icon: FiMapPin,
    text: APP_ADRESS2,
    text2: APP_ADRESS3,
  },
];

// Informations légales
export const legalInfo: LegalInfoItem[] = [
  {
    label: "Raison Sociale",
    text: APP_NAME,
    icon: FaRegBuilding,
  },
  {
    label: "Statut",
    text: APP_STATUS,
    icon: MdOutlineVerified ,
  },
  {
    label: "Représentant Légal",
    text: APP_DEV,
    icon: GrUserManager,
  },
  {
    label: "Numéro SIRET",
    text: APP_SIRET,
    icon: BsBriefcase ,
  },
  {
    label: "Adresse du Siège Social",
    text: APP_ADRESS + " " + APP_ADRESS2,
    icon: FiMapPin,
  },
];
