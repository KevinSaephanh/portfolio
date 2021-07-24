import React from "react";
import { NavLink } from "react-router-dom";
import { useViewport } from "../../hoc/Viewport";
import { Constants } from "../../constants/Constants";
import Resume from "../../assets/Resume.pdf";
import "./Navbar.scss";

const Navbar = () => {
  const width = useViewport().width;
  const breakpoint = 800;

  const getNavs = () => {
    return (
      <ul className="nav-list">
        {Constants.navs.map((nav, key) => {
          return (
            <NavLink
              className={nav.title}
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
        >
          Resume
        </a>
      </ul>
    );
  };

  const toggleNav = () => {
    if (width <= breakpoint) {
      const toggleButton = document.getElementById("nav-icon");
      toggleButton.classList.toggle("open");
      const navList = document.getElementsByClassName("nav-list")[0];
      navList.classList.toggle("active");
    }
  };

  return (
    <nav className="navbar">
      {/* Yeti logo */}
      <a href="/">
        <div id="yeti" title="Yeti from MapleStory drawn using HTML and CSS">
          <div className="eye eye1" />
          <div className="eye eye2" />
          <div className="cheek cheek1" />
          <div className="cheek cheek2" />
          <div className="mouth">vvvv</div>
        </div>
      </a>

      <div>
        {width >= breakpoint ? (
          getNavs()
        ) : (
          <div>
            {/* Nav toggle icon */}
            <div id="nav-icon" onClick={() => toggleNav()}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            {getNavs()}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
