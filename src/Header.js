import React from 'react';
import "./Header.css";
import logo from "./images/Nnetify-Text.png";

function Header() {
    return (
        <div className="Header">
            <div className="container">
                <div className="header__left sidebar__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header__right">
                    <button>Visit Website</button>
                </div>
            </div>
        </div>
    )
}

export default Header
