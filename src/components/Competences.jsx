import React from "react";
import htmlLogo from '../img/html5.png';
import cssLogo from '../img/css3.png';
import sassLogo from '../img/sass.png';
import jsLogo from '../img/javascript2.png';
import jsonLogo from '../img/json.png';
import reactLogo from '../img/react.svg';
import reduxLogo from '../img/redux.svg';

const Competences = () => {
    return ( 
        <section className="competences">
            <h2 className="competences__h2">Mes compétences</h2>
            <div className="languages">
                <h3 className="languages__h3">Mes languages</h3>
                <span className="language__container">
                    <img src={htmlLogo} alt="Logo Html5" />
                    <img src={cssLogo} alt="Logo CSS3" />
                    <img src={sassLogo} alt="Logo SASS" />
                    <img src={jsLogo} alt="Logo JavaScript" />
                    <img src={jsonLogo} alt="Logo JSON" />
                    <img src={reactLogo} alt="Logo REACT" />
                    <img src={reduxLogo} alt="Logo REDUX" />
                </span>
            </div>
            <div className="outils">
                <h3 className="outils__h3">Mes outils</h3>
            </div>
        </section>
    )
}

export default Competences