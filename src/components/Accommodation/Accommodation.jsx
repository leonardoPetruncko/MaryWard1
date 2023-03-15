import React, {useState} from "react";
import data from "../../constants/data";
import images from "../../constants/images";
import "./Accommodation.css";
import {FaTimesCircle} from "react-icons/fa";

const Accommodation = () => {

    const [imageModal, setImageModal] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const setImageOnModal = (src) => {
        setImageSrc(src);
        setImageModal(true);
    }

    return (
        <div className="accommodation">
            <div className={imageModal ? "image__modal image__modal__show" : "image__modal"}>
                <div className="image__modal--content">
                    <FaTimesCircle className="modal__close--btn text__light bg__blue" size = {30} onClick = {() => setImageModal(false)} />
                    <img src = {imageSrc} alt = "" />
                </div>
            </div>

            <div className="accommodation__content grid">
                {
                    data.accommodation.map((accommodation, index) => {
                        return (
                            <div className="accommodation__content--item" key = {index} onClick = {() => setImageOnModal(accommodation.img)}>
                                <img src = {accommodation.img} alt = "" className="img" />
                                <div className="icon">
                                    <img src = {images.icon_eye} alt = "" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accommodation;
