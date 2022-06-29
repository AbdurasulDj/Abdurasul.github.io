import React from 'react';
import './Home.scss'

import Photo from "./photo.jpg"

import Typewriter from "typewriter-effect";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home() {
  return (
    <div className='home-container' id='home'>
      <div className="profile-container">

        <div className="photo-container">
          <div className="img-container" style={{ backgroundImage: `url(${Photo})`}}>
          </div>
        </div>

        <div className="social-media-container">
          <div id="telegram">
              <a href="https://t.me/Djurayev_Abdurasul">
                  <FontAwesomeIcon icon={brands('telegram-plane')} />
              </a>
          </div>
          <div id="instagram">
              <a href="https://www.instagram.com/kaktuschik_06/">
                  <FontAwesomeIcon icon={brands('instagram')} />
              </a>
          </div>
          <div id="linkedin">
              <a href="https://www.linkedin.com/in/abdurasul-jorayev/">
                  <FontAwesomeIcon icon={brands('linkedin')} />
              </a>
          </div>
          <div id="github">
              <a href="https://github.com/AbdurasulDj">
                  <FontAwesomeIcon icon={brands('github')} />
              </a>
          </div>
          <div id="discord">
              <a href="https://discord.gg/8Q94kW8aby">
                  <FontAwesomeIcon icon={brands('discord')} />
              </a>
          </div>
        </div>

        <h1>Hello, I'm <span>Abdurasul</span> </h1>

        <div className="typewritter">
          <Typewriter

          options={{
              autoStart: true,
              loop: true,
            }}
      
          onInit={(typewriter)=> {
      
          typewriter

          .typeString("Front-end developer")
            
          .pauseFor(500)
          .deleteAll()
          .typeString("Cross Platform dev ")
          
          .pauseFor(500)
          .deleteAll()
          .typeString("JavaScript / ReactJs ")

          .pauseFor(500)
          .deleteAll()
          .typeString("Self-made dev 😎")
          .pauseFor(500)
          
          .start()
          }}
          />
        </div>

        <p>
          Enthusiast about web dev world 🌍.
        </p>
      </div>
    </div>
    );
}
