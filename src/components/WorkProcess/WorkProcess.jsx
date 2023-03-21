import React from "react"
import "./WorkProcess.css"
import WorkProcessVid from "../../assets/videos/video.mp4"
import { ControlBar, Player, PlayToggle } from "video-react"
import  ReactPlayer  from  'react-player'
import 'video-react/dist/video-react.css';

const WorkProcess = () => {
    return (
        <div className="workprocess section__padding">
            <div className="container">
                <div className="workprocess__content text__center">
                    <h2 className="section__title text__cap fw__2">Venha conhecer</h2>
                    <p className="para__text fw__3"> Um espaço silencioso, com uma Exuberante Natureza. Conta com sala de palestras, sala de apoio, salas de atendimento, Capela Santíssima Trindade (com capacidade para cem pessoas) </p>

                    <div className="vid__container">
                    <ReactPlayer url='https://youtu.be/ysGvmQloiaA'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess;
