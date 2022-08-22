import React from 'react'
import Typewriter from "typewriter-effect";

import '../Home.scss'


export default function TypeWritter({t}) {
  
  return(
    <>
      <Typewriter
          options={{
              autoStart: true,
              loop: true,
            }}
      
          onInit={(typewriter )=> {
      
          typewriter

          .typeString(`${t('frontend_developer')}`)
            
          .pauseFor(500)
          .deleteAll()
          .typeString(`${t('cross_platform_dev')}`)
          
          .pauseFor(500)
          .deleteAll()
          .typeString(t('javascript_react'))

          .pauseFor(500)
          .deleteAll()
          .typeString(t('self_made_dev'))
          .pauseFor(500)
          
          .start()
          }}
        />
    </>
  )
};
