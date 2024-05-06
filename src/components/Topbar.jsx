import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
        <ul className="topbar">
            <li>
                <NavLink className="topbar-link" to="">Accueil</NavLink>
            </li>
            <li>
                <NavLink className="topbar-link" to="">Présentation</NavLink>
            </li>
            <li>
                <NavLink className="topbar-link" to="">Services</NavLink>
            </li>
            <li>
                <NavLink className="topbar-link" to="">Réalisations</NavLink>
            </li>
            <li>
                <NavLink className="topbar-link" to="">Compétences</NavLink>
            </li>
            <li>
                <NavLink className="topbar-link" to="">Formation et CV</NavLink>
            </li>
            <li>
                <NavLink className="topbar-link" to="">Contact</NavLink>
            </li>
        </ul>
    </div>
  );
};

export default Topbar;