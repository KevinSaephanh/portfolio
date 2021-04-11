import React from "react";
import { Constants } from "../../constants/Constants";
import "./Footer.css";

const Footer = () => {
  const getSocials = () => {
    return Constants.socials.map((social, key) => {
      return (
        <a href={social.link} key={key}>
          <i
            className={social.icon}
            title={social.title}
            key={key}
            aria-hidden="true"
          />
        </a>
      );
    });
  };

  return <footer>{getSocials()}</footer>;
};

export default Footer;
