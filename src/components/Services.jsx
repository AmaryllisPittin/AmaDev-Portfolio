import React from "react";
import DevLogo from "../img/dev-logo.png";
import MaintenanceLogo from "../img/maintenance-logo.png";

const Services = () => {
    return ( 
        <section className="services" id="services">
            <h2 className="services__h2">Mes services</h2>
            <div className="services-container">
                <article className="service-card">
                    <img className="service-card__logo" src={DevLogo} alt="logo de développement web" />
                    <h3 className="service-card__h3">Création et développement de sites web</h3>
                    <p className="service-card__p">Concevoir un site web de zéro, ou bien participer l'élaboration d'un site au sein d'un groupe de développeurs.</p>
                </article>
                <article className="service-card">
                <img className="service-card__logo" src={MaintenanceLogo} alt="logo de maintenance web" />
                    <h3 className="service-card__h3">Maintenance pour le SEO, l'accessibilité et la visibilité d'un site</h3>
                    <p className="service-card__p">Travailler sur la maintenance et la performance de votre site pour améliorer l'expérience utilisateur, renforcer votre marque et élargir votre public.</p>
                </article>
            </div>
        </section>
    )
}

export default Services