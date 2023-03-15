import React from 'react';
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
    <div className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <h2 className='section__title text__cap'>Sobre</h2>
                <p className='para__text text__grey'>Um espaço silencioso, com uma Exuberante Natureza. Conta com sala de palestras, sala de apoio, salas de atendimento, Capela Santíssima Trindade (com capacidade para cem pessoas), capela interna com espaço propício para oração, um aconchegante jardim interno, um amplo refeitório (para atender 80 pessoas simultaneamente), quarenta quartos com duas camas e banheiro, sete apartamentos, quarto para grupo, cozinha funcional, arejada e muito bem equipada, quiosques com churrasqueira, terraço para atividades diversas e quadra.</p>
                {/* <img src = {images.signature} alt = "" /> */}
            </div>
        </div>
    </div>
)

export default AboutUs;
