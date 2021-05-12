import partnerLogo from "../assets/icons/footer/fiat-logo.svg";
import phoneIcon from "../assets/icons/footer/phone-icon.svg";
import mailIcon from "../assets/icons/footer/mail-icon.svg";

export const footerStructure = {
  logoText: "THE MUSEUM",
  address: "Via Sant Ottavio, 44 - 10126 Torino",
  partnerLogo: partnerLogo,
  partnerText: "MAIN PARTNER",
  socialMedia: [
    { url: "Visita", imgSrc: "#", altText: "" },
    { url: "Visita", imgSrc: "#", altText: "" },
    { url: "Visita", imgSrc: "#", altText: "" },
  ],
  links: [
    { title: "STAMPA", url: "#" },
    { title: "STATUTO E CODICE ETICO", url: "#" },
    { title: "PRIVACY", url: "#" },
  ],
  phone: {
    icon: phoneIcon,
    text: "011.0062713",
    altText: "Phone icon",
  },
  mail: {
    icon: mailIcon,
    text: "info@themuseum.it",
    altText: "Mail icon",
  },
};
