import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "#" className="footer__navlink">Centro de Espiritualidade Mary Ward, Inc.</a>
                        <p className="para__text">&copy; Desenvolvido por Leonardo Petruncko</p>
                    </div>
        
                    <div className="footer__content--item">
                        <h3 className="footer__title">Media Links</h3>
                        <ul className="footer__links">
                            <li><a href = "#link">Facebook</a></li>
                            <li><a href = "#link">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer;
