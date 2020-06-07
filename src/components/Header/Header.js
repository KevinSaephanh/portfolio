import React from "react";
import usePrevious from "../../hooks/usePrevious";
import Cactuar from "../../assets/cactuar.png";
import Navs from "./Navs.json";
import "./Header.css";

const Header = ({ currentPage, handleNavClick }) => {
    const [open, setOpen] = React.useState(false);
    const prevPage = usePrevious(currentPage);

    // React.useEffect(() => {
    //     console.log(prevPage);
    //     const prevPageStyle = document.getElementById(prevPage).style;
    //     prevPageStyle.color = "white";
    //     prevPageStyle.borderBottom = "none";

    //     console.log(currentPage);
    //     const currentPageStyle = document.getElementById(currentPage).style;
    //     currentPageStyle.color = "turquoise";
    //     prevPageStyle.borderBottom = "2px solid turquoise";
    // }, [currentPage]);

    const toggle = () => {
        setOpen(!open);
    };

    const getNavs = () => {
        return (
            <ul>
                {Navs.navs.map((nav, i) => {
                    return (
                        <i
                            id={nav.id}
                            className={nav.icon}
                            title={nav.title}
                            key={i}
                            aria-hidden="true"
                        />
                    );
                })}
            </ul>
        );
    };

    return (
        <header>
            <img src={Cactuar} alt="" title="Final Fantasy Cactuar UwU" />
            {getNavs()}
        </header>
    );
};

export default Header;
