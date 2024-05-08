import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
          <div className="topbar-container">
            <ul className="topbar">
              <li>
                <NavLink className="topbar-link" to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink className="topbar-link" to="/presentation">Présentation</NavLink>
              </li>
              <li>
                <NavLink className="topbar-link" to="/services">Services</NavLink>
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