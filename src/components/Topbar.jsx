import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
          <div className="topbar-container">
            <ul className="topbar">
              <li>
                <a className="topbar-link" href="#headerBanner">Accueil</a>
              </li>
              <li>
              <a className="topbar-link" href="#about">Présentation</a>
              </li>
              <li>
                <a className="topbar-link" href="#services">Services</a>
              </li>
              <li>
                <NavLink className="topbar-link" to="/realisations">Réalisations</NavLink>
              </li>
              <li>
                <NavLink className="topbar-link" to="/competences">Compétences</NavLink>
              </li>
              <li>
                <NavLink className="topbar-link" to="/formation-cv">Formation et CV</NavLink>
              </li>
              <li>
                <NavLink className="topbar-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        );
      };

export default Topbar;