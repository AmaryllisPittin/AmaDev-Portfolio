import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <ul className="topbar">
        <li>
          <Link className="topbar-link" smooth to="/#headerBanner">Accueil</Link>
        </li>
        <li>
          <Link className="topbar-link" smooth to="/#about">Présentation</Link>
        </li>
        <li>
          <Link className="topbar-link" smooth to="/#services">Services</Link>
        </li>
        <li>
          <Link className="topbar-link" smooth to="/#realisations">Réalisations</Link>
        </li>
        <li>
          <Link className="topbar-link" smooth to="/#competences">Compétences</Link>
        </li>
        <li>
          <Link className="topbar-link" smooth to="/#formation">Formations et CV</Link>
        </li>
        <li>
          <Link className="topbar-link" smooth to="/#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;

