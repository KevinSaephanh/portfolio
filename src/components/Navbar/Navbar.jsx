import React from "react";
import { NavLink } from "react-router-dom";
import { Constants } from "../../constants/Constants";
import "./Navbar.scss";

const Navbar = () => {
  const getNavs = () => {
    return (
      <ul className="nav-menu">
        {Constants.navs.map((nav, key) => {
          return (
            <NavLink
              className={`${nav.title} nav-item`}
              to={nav.link}
              key={key}
              onClick={() => toggleNav()}
            >
              <i
                id={nav.id}
                className={nav.icon}
                title={nav.title}
                aria-hidden="true"
              />
              {nav.title}
            </NavLink>
          );
        })}
        <a
          href={`${process.env.REACT_APP_S3_URL}/Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          Resume
        </a>
      </ul>
    );
  };

  const toggleNav = () => {
    const toggleHamburger = document.getElementById("hamburger");
    toggleHamburger.classList.toggle("open");
    const navMenu = document.getElementsByClassName("nav-menu")[0];
    navMenu.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      {/* Yeti logo */}
      <a href="/">
        <div id="yeti" title="Yeti from MapleStory made with CSS">
          <div className="eye eye1" />
          <div className="eye eye2" />
          <div className="cheek cheek1" />
          <div className="cheek cheek2" />
          <div className="mouth">vvvv</div>
        </div>
      </a>

      <div>
        {getNavs()}
        <div id="hamburger" onClick={() => toggleNav()}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
