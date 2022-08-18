import React from 'react'
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

import './Home.scss'


export default function TypeWritter() {
  const { t } = useTranslation();

    return(
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
              }}
        
            async onInit={(typewriter )=> {
        
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
    )
};
