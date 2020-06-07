import React from "react";

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return <header>NAV</header>;
};

export default Header;
