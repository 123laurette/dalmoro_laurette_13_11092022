import React from 'react';
import logo from "./../../assets/argentBankLogo.png"
import {Link} from "react-router-dom"



const Header_SignOut = () => {
    return (
        <nav className="main-nav">
            <Link to="/"className="main-nav-logo" >
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {/*faire le lien avec la page detail user*/}
                <a className="main-nav-item" href="./User.jsx">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </a>
                <Link to="/" className="main-nav-item">{/*ce lien doit retourner à la page d'accueil et faire une déconnexion*/}
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
        </nav>
    );
};

export default Header_SignOut;