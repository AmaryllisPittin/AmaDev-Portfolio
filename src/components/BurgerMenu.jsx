import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <ul>
        <li className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </li>
      </ul>
      {showMenu && (
        <div className="dropdown-menu">
          <ul className="dropdown-menu__container">
            <li className="container-link first-burger-link">
              <Link className="dropdown-link" smooth to="/#about">Présentation</Link>
            </li>
            <li className="container-link">
              <Link className="dropdown-link" smooth to="/#services">Services</Link>
            </li>
            <li className="container-link">
              <Link className="dropdown-link" smooth to="/#realisations">Réalisations</Link>
            </li>
            <li className="container-link">
              <Link className="dropdown-link" smooth to="/#competences">Compétences</Link>
            </li>
            <li className="container-link">
              <Link className="dropdown-link" smooth to="/#formation">Formations et CV</Link>
            </li>
            <li className="container-link">
              <Link className="dropdown-link" smooth to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
