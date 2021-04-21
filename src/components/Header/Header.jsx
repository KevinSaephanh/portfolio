import React from "react";
import { NavLink } from "react-router-dom";
import { useViewport } from "../../hooks/Viewport";
import { Constants } from "../../constants/Constants";
import Resume from "../../assets/Resume.pdf";
import "./Header.scss";

const Header = () => {
  const width = useViewport().width;
  const breakpoint = 700;

  const getNavs = () => {
    return (
      <ul className="nav-list">
        {Constants.navs.map((nav, key) => {
          return (
            <NavLink className={nav.title} to={nav.link} key={key}>
              <i
                id={nav.id}
                className={nav.icon}
                title={nav.title}
                key={key}
                aria-hidden="true"
              />
              {nav.title}
            </NavLink>
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
        <div className="yeti" title="Yeti from MapleStory">
          <div className="eye eye1" />
          <div className="eye eye2" />
          <div className="cheek cheek1" />
          <div className="cheek cheek2" />
          <div className="mouth">vvvv</div>
        </div>
      </a>
      <div>{width >= breakpoint ? getNavs() : getNavs()}</div>
    </header>
  );
};

export default Header;
