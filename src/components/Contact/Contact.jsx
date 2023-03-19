
import React from "react";
import "./Contact.css";


const Contact = () => {

    return (
        <div className="contact section__padding bg__whitesmoke">
            <div className="container">
                <h2 className="section__title text__center">Contato</h2>
                <p className="para__text text__center">Mande uma mensagem e agende uma Visita!</p>

                <div className="contact__content">
                    <form>
                        <a className="btn btn__blue" href="https://web.whatsapp.com/">send message</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
