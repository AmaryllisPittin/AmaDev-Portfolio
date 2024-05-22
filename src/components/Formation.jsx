import React from "react";


const Formation = () => {
  return (
    <section className="formation" id="formation">
        <h2 className="formation__h2">Formations et CV</h2>
        <div className="formations-container">
          <div className="formations">
            <h3 className="formations__h3">Mes formations</h3>
            <ul>
              <li>Intégrateur Web - OpenClassRooms</li>
            </ul>
          </div>
          <div className="autres-formations">
            <h3>Formations dans d'autres domaines</h3>
            <ul>
              <li>Licence Histoire et Patrimoine (Bac + 3)</li>
              <li>DU Généalogie et Histoire des Familles</li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default Formation;