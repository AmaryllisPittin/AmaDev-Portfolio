import React from "react";
import { NavLink } from "react-router-dom";
import dataTab from "../data.json";

const Realisations = () => {
    return ( 
        <section className="realisations" id="realisations">
            <h2 className="realisations__h2">Mes réalisations</h2>
            <div className="card-container">
                {dataTab.map(item => (
                    <NavLink className="card-link" key={item.id} to={`/realisation/${item.id}`} style={{ backgroundColor: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))` }}>
                        <article className={`card card-${item.id}`} style={{ backgroundImage: `url(${item.cover})` }}>
                            <h2 className="card__h2">{item.title}</h2>
                        </article>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}

export default Realisations