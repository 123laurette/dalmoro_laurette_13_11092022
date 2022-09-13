import React from 'react';
import logo from "./../../assets/argentBankLogo.png"


const Header_SignOut = () => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./indexHome.jsx">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./User.jsx">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </a>
                <a className="main-nav-item" href="././indexHome.jsx">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </a>
            </div>
        </nav>
    );
};

export default Header_SignOut;