import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="topbar-container">
      <ul className={`topbar ${showMenu ? "show-menu" : ""}`}>
        <li className="header-link">
          <Link className="topbar-link" smooth to="/#headerBanner">Accueil</Link>
        </li>
        <li className="hide-on-mobile">
          <Link className="topbar-link" smooth to="/#about">Présentation</Link>
        </li>
        <li className="hide-on-mobile">
          <Link className="topbar-link" smooth to="/#services">Services</Link>
        </li>
        <li className="hide-on-mobile">
          <Link className="topbar-link" smooth to="/#realisations">Réalisations</Link>
        </li>
        <li className="hide-on-mobile">
          <Link className="topbar-link" smooth to="/#competences">Compétences</Link>
        </li>
        <li className="hide-on-mobile">
          <Link className="topbar-link" smooth to="/#formation">Formations et CV</Link>
        </li>
        <li className="hide-on-mobile">
          <Link className="topbar-link" smooth to="/#contact">Contact</Link>
        </li>
        <li className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </li>
        {showMenu && (
          <div className="dropdown-menu">
            {/* Mettez ici vos liens supplémentaires pour le menu déroulant */}
            <Link className="dropdown-link" smooth to="/#about">Présentation</Link>
            <Link className="dropdown-link" smooth to="/#services">Services</Link>
            <Link className="dropdown-link" smooth to="/#realisations">Réalisations</Link>
            <Link className="dropdown-link" smooth to="/#competences">Compétences</Link>
            <Link className="dropdown-link" smooth to="/#formation">Formations et CV</Link>
            <Link className="dropdown-link" smooth to="/#contact">Contact</Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Topbar;



