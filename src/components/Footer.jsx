import React, { useState } from 'react';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        but: 'Collaboration professionnelle',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const responseData = await response.text();
                alert(responseData);
            } else {
                alert('Une erreur est survenue lors de l\'envoi du message.');
            }
        } catch (error) {
            console.error(error);
            alert('Une erreur est survenue lors de l\'envoi du message.');
        }
    };

    return (
        <footer className="footer" id="contact">
            <h2 className="footer__h2">Me contacter</h2>
            <form className="footer-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
                
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Entrez votre adresse e-mail" value={formData.email} onChange={handleChange} required />
                
                <label htmlFor="but-select">Objet</label>
                <select name="but" id="but-select" value={formData.but} onChange={handleChange} required>
                    <option value="Collaboration professionnelle">Collaboration professionnelle</option>
                    <option value="Aide technique">Aide technique</option>
                    <option value="Proposition de projet">Proposition de projet</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Autre">Autre</option>
                </select>
                
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" cols="33" placeholder="Entrez votre message" value={formData.message} onChange={handleChange} required></textarea>
                
                <input className="input-submit" type="submit" value="Envoyer" />
            </form>
            <span className="copyright">copyright 2024 - site développé par Amaryllis PITTIN</span>
        </footer>
    );
};

export default Footer;
