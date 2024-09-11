import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import BurgerMenu from "./BurgerMenu";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <ul className="topbar">
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
          <Link className="topbar-link" smooth to="/#formation">Formations</Link>
        </li>
        <li className="hide-on-mobile">
          <Link className="topbar-link" smooth to="/#contact">Contact</Link>
        </li>
      </ul>

      <BurgerMenu />
    </div>
  );
};

export default Topbar;




