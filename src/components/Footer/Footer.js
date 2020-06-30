import React from "react";
import Socials from "./Socials.json";
import "./Footer.css";

const Footer = () => {
    const getSocials = () => {
        return Socials.socials.map((social, key) => {
            return (
                <a href={social.link}>
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
