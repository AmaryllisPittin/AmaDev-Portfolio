import React from "react";
import CV from "../img/CV Amaryllis Pittin.png";
import pdfCV from "../docs/CV Amaryllis Pittin.pdf";


const Formation = () => {
  return (
    <section className="formation" id="formation">
        <h2 className="formation__h2">Formations et CV</h2>
        <div className="formations-container">
          <div className="formations">
            <div className="formations-list">
              <h3 className="formations__h3">Mes formations</h3>
              <ul>
                <li className="formation-li">Intégrateur Web - OpenClassRooms</li>
              </ul>
            </div>
            <div className="autres-formations">
              <h3 className="formations__h3">Formations dans d'autres domaines</h3>
              <ul>
                <li className="formation-li">Licence Histoire et Patrimoine (Bac + 3)</li>
                <li className="formation-li">DU Généalogie et Histoire des Familles</li>
              </ul>
            </div>
          </div>
          <div className="cv-container">
            <img className="cv" src={CV} alt="CV Amaryllis Pittin"/>
            <div className="download-link">
              <a href={pdfCV} download="CV_Pittin_Amaryllis.pdf">Télécharger mon CV en PDF</a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Formation;