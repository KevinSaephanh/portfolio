import React from "react";
import { useHistory } from "react-router-dom";
import usePrevious from "../../hooks/usePrevious";
import Tonberry from "../../assets/tonberry.png";
import Navs from "./Navs.json";
import "./Header.css";

const Header = ({ currentPage, handleNavClick }) => {
    const [open, setOpen] = React.useState(false);
    const prevPage = usePrevious(currentPage);
    const history = useHistory();

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
                <img src={Tonberry} alt="" title="Final Fantasy Tonberry UwU" />
            </a>
            {getNavs()}
        </header>
    );
};

export default Header;
