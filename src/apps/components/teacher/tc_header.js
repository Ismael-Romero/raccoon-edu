import React from "react";
import ReactDom from "react-dom/client";

import Logo from "./header/logo";
import Profile from "./header/profile";

const Header = () => {
    return(
        <header id="header" className="header fixed-top d-flex align-items-center">
            
            <Logo  
                img="./assets/img/logo.png" 
                text="Raccoon EDU"/>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown">

                    </li>
                    <li className="nav-item dropdown pe-3">
                        <Profile />
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;