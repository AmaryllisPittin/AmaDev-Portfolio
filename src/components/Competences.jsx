import React from "react";
import htmlLogo from '../img/html5.png';
import cssLogo from '../img/css3.png';
import sassLogo from '../img/sass.png';
import jsLogo from '../img/javascript2.png';
import jsonLogo from '../img/json.png';
import reactLogo from '../img/react.svg';
import reduxLogo from '../img/redux.svg';
import githubLogo from '../img/github.png';
import vscodeLogo from '../img/vscode.png';

const Competences = () => {
    return ( 
        <section className="competences">
            <h2 className="competences__h2">Mes compétences</h2>
            <div className="languages">
                <h3 className="languages__h3">Mes languages</h3>
                <span className="language__container">
                    <span className="logo-container">
                        <img className="logo-container__img" src={htmlLogo} alt="Logo Html5" />
                        <h4 className="logo-container__name">HTML5</h4>
                    </span>
                    <span className="logo-container">
                        <img className="logo-container__img" src={cssLogo} alt="Logo Css3" />
                        <h4 className="logo-container__name">CSS3</h4>
                    </span>
                    <span className="logo-container">
                        <img className="logo-container__img" src={sassLogo} alt="Logo Sass" />
                        <h4 className="logo-container__name">Sass</h4>
                    </span>
                    <span className="logo-container">
                        <img className="logo-container__img" src={jsLogo} alt="Logo JavaScript" />
                        <h4 className="logo-container__name">JavaScript</h4>
                    </span>
                    <span className="logo-container">
                        <img className="logo-container__img" src={jsonLogo} alt="Logo Json" />
                        <h4 className="logo-container__name">Json</h4>
                    </span>
                    <span className="logo-container">
                        <img className="logo-container__img" src={reactLogo} alt="Logo React" />
                        <h4 className="logo-container__name">React</h4>
                    </span>
                    <span className="logo-container">
                        <img className="logo-container__img" src={reduxLogo} alt="Logo Redux" />
                        <h4 className="logo-container__name">Redux</h4>
                    </span>
                </span>
            </div>
            <div className="outils">
                <h3 className="outils__h3">Mes outils</h3>
                <span className="outils__container">
                    <span className="logo-container">
                        <img className="logo-container__img" src={githubLogo} alt="Logo GitHub" />
                        <h4 className="logo-container__name">GitHub</h4>
                    </span>
                    <span className="logo-container">
                        <img className="logo-container__img" src={vscodeLogo} alt="Logo VScode" />
                        <h4 className="logo-container__name">Visual Studio Code</h4>
                    </span>
                </span>
            </div>
        </section>
    )
}

export default Competences