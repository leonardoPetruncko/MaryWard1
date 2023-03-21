
import React from "react";
import "./Contact.css";


const Contact = () => {

    return (
        <div className="contact section__padding bg__whitesmoke">
            <div className="container">
                <h2 className="section__title text__center fw__2">Contato</h2>
                <p className="para__text text__center fw__3">Mande uma mensagem e agende uma Visita!</p>

                <div className="contact__content">
                    <form>
                        <a className="btn btn__blue" target="_blank" href="https://api.whatsapp.com/send?phone=5511976774420&text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20visita!">Whats</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
