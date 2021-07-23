import React from "react";
import { Constants } from "../../constants/Constants";
import "./Footer.scss";

const Footer = () => {
  // Make icon move up
  const jump = (icon) => {
    const socialIcon = document.getElementsByClassName(icon)[0];
    socialIcon.style.transform = "translateY(-5px)";
  };

  // Make icon drop back down to original position
  const drop = (icon) => {
    const socialIcon = document.getElementsByClassName(icon)[0];
    socialIcon.style.transform = "none";
  };

  return (
    <footer>
      <div>
        {Constants.socials.map((social, key) => {
          return (
            <a href={social.link} key={key}>
              <i
                className={social.icon}
                title={social.title}
                key={key}
                aria-hidden="true"
                onMouseEnter={() => jump(social.icon)}
                onMouseLeave={() => drop(social.icon)}
              />
            </a>
          );
        })}
      </div>
      <span>Designed and built by me, Kevin Saephanh</span>
    </footer>
  );
};

export default Footer;
