import facebookIcon from "../assets/icons/header/header-facebook.svg";
import instagramIcon from "../assets/icons/header/header-instagram.svg";
import twitterIcon from "../assets/icons/header/header-twitter.svg";

export const navStructure = {
  logo: "THE MUSEUM",
  links: [
    { title: "VISITA", path: "" },
    { title: "COSA VEDERE", path: "" },
    { title: "CHI SIAMO", path: "" },
    { title: "ATTIVITA", path: "" },
    { title: "AGENDA", path: "" },
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
  mobileMenuIcon: twitterIcon,
};
