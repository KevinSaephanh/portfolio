import React from "react";
import Navs from "./Navs.json";
import "./Header.css";

const Header = () => {
    const getNavs = () => {
        return (
            <ul>
                {Navs.navs.map((nav, key) => {
                    return (
                        <a href={nav.link}>
                            <i
                                id={nav.id}
                                className={nav.icon}
                                title={nav.title}
                                key={key}
                                aria-hidden="true"
                            />
                        </a>
                    );
                })}
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
