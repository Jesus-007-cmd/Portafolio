
import "../css/video.css"; // import css
import Buttons from '../componentes/Buttons'
import React from 'react'
import ReactPlayer from 'react-player'


function Video() {

    return (
        <div className="video">
            <ReactPlayer
                url={require('../imgs/videoestrellas.mp4')}
                width='100%'
                height='100%'
                Autoplay
                loop
                playing
                muted
            >
            </ReactPlayer>
            <div className="contenido">
                <div className="orden">
                    <div className="Textotit">Bienvenido</div>
                    <div className="textomarcadesfullstack">Desarrollador Web Full Stack </div>
                    <div className="orden">
                        <div className="textomarca">Contacto: </div>
                        <center><div>
                            <div className="Textonorm"> 639-128-80-66</div>
                            <div className="Textonorm"> developerforyou@icloud.com</div>
                        </div></center></div>
                    <Buttons></Buttons>


                </div>

            </div>

        </div>

    );

}
export default Video
