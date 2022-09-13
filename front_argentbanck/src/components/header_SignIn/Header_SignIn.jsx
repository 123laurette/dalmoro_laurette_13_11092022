import "./Header_Sign.css"
import React from 'react';
import {Link} from "react-router-dom"
import logo from "./../../assets/argentBankLogo.png"

const Header_SignIn = () => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./indexHome.jsx">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <Link to="/SignIn" className="main-nav-item" >
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Header_SignIn;