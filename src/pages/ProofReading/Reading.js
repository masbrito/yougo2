import React from "react";
import { useState, useRef  } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


import { Container, Destribution } from "./styles";

//import Player from "../../components/Player/Player";

import HeadPhone from "./assets/headphone.png";

import Antifragil from "../../data/assets/antifragil.png";
import Comece from "../../data/assets/comece.png";
import Contagio from "../../data/assets/contagio.png";
import Opoder from "../../data/assets/opoder.png";
import Ossegredos from "../../data/assets/ossegredos.png";
import Outlander from "../../data/assets/Outlander.png";
import Quemevoce from "../../data/assets/Quemevoce.png";
import Stevejobs from "../../data/assets/stevejobs.png";
import antifragil from "../../data/audios/antifragil.mp3";
import comece from "../../data/audios/comece.mp3";
import contagio from "../../data/audios/contagio.mp3";
import opoder from "../../data/audios/opoder.mp3";
import ossegredos from "../../data/audios/ossegredos.mp3";
import outlander from "../../data/audios/outlander.mp3";
import quem from "../../data/audios/quem.mp3";
import steve from "../../data/audios/steve.mp3";




export default function Reading() {
    const [isPlaying, setIsPlaying] = useState({
        antifragil: false,
        comece: false,
        contagio: false,
        opoder: false,
        ossegredos: false,
        oulander: false,
        quem: false,
        steve: false,
        // ... (add other states)
      });
    const audioRefs = {
        antifragil: useRef(null),
        comece: useRef(null),
        contagio: useRef(null),
        opoder: useRef(null),
        ossegredos: useRef(null),
        outlander: useRef(null),
        quem: useRef(null),
        steve: useRef(null),
        // ... (add other refs)
      };
    

      const handleTogglePlay = (audioKey) => {
        const audio = audioRefs[audioKey].current;

        // Pause currently playing audio
    Object.keys(audioRefs).forEach((key) => {
        if (key !== audioKey && isPlaying[key]) {
          audioRefs[key].current.pause();
          setIsPlaying((prevIsPlaying) => ({ ...prevIsPlaying, [key]: false }));
        }
      });
    
        if (audio) {
          if (isPlaying[audioKey]) {
            audio.pause();
          } else {
            audio.play();
          }
    
          setIsPlaying((prevIsPlaying) => ({
            ...prevIsPlaying,
            [audioKey]: !prevIsPlaying[audioKey],
          }));
        }
      };
    
    return(
        <Container>
            <Header />

            <Destribution>

                <div className="text-sup">
                    <img src={HeadPhone} alt="Head Phone"/>
                    <h2>Sinta a experiência de fazer parte do nosso universo!</h2>
                </div>

                <div className="container images">
          {[
            { key: "antifragil", img: Antifragil, audio: antifragil },
            { key: "comece", img: Comece, audio: comece },
            { key: "contagio", img: Contagio, audio: contagio },
            { key: "opoder", img: Opoder, audio: opoder },
            { key: "ossegredos", img: Ossegredos, audio: ossegredos },
            { key: "outlander", img: Outlander, audio: outlander },
            { key: "quem", img: Quemevoce, audio: quem },
            { key: "steve", img: Stevejobs, audio: steve },

            // ... (add other objects for each image)
          ].map((item) => (
            <div className="audio-container" key={item.key}>
              <img src={item.img} alt={`Capa ${item.key}`} />
              <audio src={item.audio} ref={audioRefs[item.key]} className="audio-element"></audio>
              <button onClick={() => handleTogglePlay(item.key)} className="play-pause-button">
                {isPlaying[item.key] ? "⏸️" : "▶️"}
              </button>
            </div>
          ))}
        </div>

                {/*<div className="card-container">
                    <div className="card-player">
                        <Player/>
                    </div>
                </div>*/}
            </Destribution>

            <Footer />
        </Container>
    );
};