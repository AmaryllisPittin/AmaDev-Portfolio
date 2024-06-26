import React from "react";
import OrdiImg from "../img/logo350.webp";
import GitHubLogo from "../img/logoGit.png";
import { HashLink as Link } from 'react-router-hash-link';


const HeaderBanner = () => {
  return (
    <header className="banner" id="headerBanner">
        <div className="banner-title">
            <h1 className="banner-title__h1">Ama Dev</h1>
            <img className="banner-title__logo" src={OrdiImg} alt="logo AmaDev" />
        </div>
        <div className="banner-welcome">
            <h2 className="banner-welcome__h2">Amaryllis Pittin, développeuse web.</h2>
            <h2 className="banner-welcome__h2">Bienvenue sur mon portfolio !</h2>
            <div className="banner-welcome__buttons">
                <a href="https://github.com/AmaryllisPittin" target="blank" className="github-btn">
                    <img src={GitHubLogo} className="github-btn__logo" alt="logo GitHub" />
                        Mon GitHub
                </a>
                <Link className="contact-btn" smooth to="/#contact">
                    Me contacter
                </Link>
        </div>

        </div>
    </header>
  );
};

export default HeaderBanner;