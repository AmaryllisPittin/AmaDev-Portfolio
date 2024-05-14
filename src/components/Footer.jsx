import React from "react";

const Footer = () => {
    return (
<footer className="footer" id="contact">
    <h2 className="footer__h2">Me contacter</h2>
    <form className="footer-form">
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder="Nom"></input>
        
        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" placeholder="Entrez votre adresse e-mail"></input>
        
        <label htmlFor="but-select"></label>
        <select name="but" id="but-select">
            <option value="Collaboration professionnelle">Collaboration professionnelle</option>
            <option value="Aide technique">Aide technique</option>
            <option value="Proposition de projet">Proposition de projet</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Autre">Autre</option>
        </select>
        
        <label htmlFor="message"></label>
        <textarea id="message" name="message" rows="5" cols="33" placeholder="Entrez votre message"></textarea>
        
        <input className="input-submit" type="submit" value="Envoyer" />
    </form>
    <span className="copyright">copyright 2024 - site développé par Amaryllis PITTIN</span>
</footer>

    )
}

export default Footer