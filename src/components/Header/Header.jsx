import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useViewport } from "../../hooks/Viewport";
import { Constants } from "../../constants/Constants";
import Resume from "../../assets/Resume.pdf";
import "./Header.scss";

const Header = () => {
  const width = useViewport().width;
  const breakpoint = 700;

  const highlight = (title, icon) => {
    const titleStyle = document.getElementsByClassName(title)[0].style;
    const iconStyle = document.getElementsByClassName(icon)[0].style;

    // Add transition
    titleStyle.transition = "0.2s ease-in";
    iconStyle.transition = "0.2s ease-in";

    // Change color
    titleStyle.color = "#66fcf1";
    iconStyle.color = "#66fcf1";
  };

  const unhighlight = (title, icon) => {
    const titleStyle = document.getElementsByClassName(title)[0].style;
    const iconStyle = document.getElementsByClassName(icon)[0].style;

    // Add transition
    titleStyle.transition = "0.2s ease-in";
    iconStyle.transition = "0.2s ease-in";

    // Change color
    titleStyle.color = "#45a29e";
    iconStyle.color = "#45a29e";
  };

  const getNavs = () => {
    return (
      <ul className="nav-list">
        {Constants.navs.map((nav, key) => {
          return (
            <a
              className={nav.title}
              href={nav.link}
              key={key}
              onMouseEnter={() => highlight(nav.title, nav.icon)}
              onMouseLeave={() => unhighlight(nav.title, nav.icon)}
            >
              <i
                id={nav.id}
                className={nav.icon}
                title={nav.title}
                key={key}
                aria-hidden="true"
              />
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
      <div>{width >= breakpoint ? getNavs() : <Menu>{getNavs()}</Menu>}</div>
    </header>
  );
};

export default Header;
