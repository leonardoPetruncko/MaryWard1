import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";

const Header = () => (
    <div className="header" style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
    }}>
        <Navbar />

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                    <h1 className="header__title fw__6">Centro de Espiritualidade Mary Ward</h1>
                    <p className="para__text">Localizado em Itapecerica da Serra, na Grande São Paulo. É uma ótima opção para a realização de retiros espirituais, acampamentos e eventos diversos.</p>
                    <a href = "#" className="btn btn__blue">Contato</a>
                </div>
            </div>
        </div>
    </div>
)

export default Header;
