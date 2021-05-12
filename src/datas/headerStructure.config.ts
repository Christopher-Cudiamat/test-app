import facebookIcon from "../assets/icons/header/header-facebook.svg";
import instagramIcon from "../assets/icons/header/header-instagram.svg";
import twitterIcon from "../assets/icons/header/header-twitter.svg";

export const headerStructure = {
  logoText1: "THE",
  logoText2: "MUSEUM",
  links: [
    { title: "VISITA", url: "#" },
    { title: "COSA VEDERE", url: "#" },
    { title: "CHI SIAMO", url: "#" },
    { title: "ATTIVITA", url: "#" },
    { title: "AGENDA", url: "#" },
  ],
  lang: ["ENG"],
  socialMedia: [
    {
      url: "#",
      imgSrc: facebookIcon,
      altText: "Facebook icon",
    },
    {
      url: "#",
      imgSrc: instagramIcon,
      altText: "Instagram Icon",
    },
    {
      url: "#",
      imgSrc: twitterIcon,
      altText: "Twitter Icon",
    },
  ],
  heroTitle: "ARCHIVIO STORICO",
  heroSlogan:
    "Una raccolta di tutti i momenti più importanti nella storia del museo e dei suoi curatori.",
  heroImage: "../assets/images/hero-image.jpg",
};
