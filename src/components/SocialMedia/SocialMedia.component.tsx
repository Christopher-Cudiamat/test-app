import React from "react";
import { ISocialMedia } from "../../datas/headerStructure.config";
import { ISocialMediaProps } from "./socialMedia.type";

const SocialMedia: React.FC<ISocialMediaProps> = ({ socialMedias }) => {
  return (
    <ul>
      {socialMedias.map((socialMedia: ISocialMedia) => (
        <li key={socialMedia.url}>
          <a href={socialMedia.url}>
            <img src={socialMedia.imgSrc} alt={socialMedia.altText} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
