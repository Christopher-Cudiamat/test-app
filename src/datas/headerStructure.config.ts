import facebookIcon from "../assets/icons/header/header-facebook.svg";
import instagramIcon from "../assets/icons/header/header-instagram.svg";
import twitterIcon from "../assets/icons/header/header-twitter.svg";
import menuIcon from "../assets/icons/header/header-menu.svg";

export const headerStructure = {
  logo: "THE MUSEUM",
  links: [
    { title: "VISITA", path: "./" },
    { title: "COSA VEDERE", path: "./" },
    { title: "CHI SIAMO", path: "./" },
    { title: "ATTIVITA", path: "./" },
    { title: "AGENDA", path: "./" },
  ],
  languages: ["ENG"],
  socialMedias: [
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
  menuIcon: menuIcon,
};

export interface ILink {
  path: string;
  title: string;
}

export interface ISocialMedia {
  url: string;
  imgSrc: string;
  altText: string;
}
