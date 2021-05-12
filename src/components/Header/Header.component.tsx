import React from "react";
import { headerStructure, ILink } from "../../datas/headerStructure.config";
import SocialMedia from "../SocialMedia/SocialMedia.component";
import "./header.style.scss";

const Header: React.FC = () => {
  const { links, logo, menuIcon, socialMedias, languages } = headerStructure;

  return (
    <nav className="header">
      <p className="header__logo">{logo}</p>
      <div className="header__menu-container">
        <ul className="header__menu-desktop">
          {links.map((link: ILink) => (
            <li key={`${link.path}-${link.title}`} className="header__list">
              <a href={link.path} className="header__link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {languages.map((language: string) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <SocialMedia socialMedias={socialMedias} />
      </div>
      <img src={menuIcon} alt="Menu Icon" className="header__menu-mobile" />
    </nav>
  );
};

export default Header;
