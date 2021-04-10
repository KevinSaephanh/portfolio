import React from "react";
import Resume from "../../assets/Resume.pdf";
import { Constants } from "../../constants/Constants";
import "./Header.css";

const Header = () => {
  const getNavs = () => {
    return (
      <ul>
        {Constants.navs.map((nav, key) => {
          return (
            <a href={nav.link}>
              {/* <i
                id={nav.id}
                className={nav.icon}
                title={nav.title}
                key={key}
                aria-hidden="true"
              /> */}
              {nav.title}
            </a>
          );
        })}
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </ul>
    );
  };

  return (
    <header>
      <a href="/">
        <div className="tonberry" title="Tonberry from Final Fantasy">
          <div className="eye eye1" />
          <div className="eye eye2" />
        </div>
      </a>
      {getNavs()}
    </header>
  );
};

export default Header;
