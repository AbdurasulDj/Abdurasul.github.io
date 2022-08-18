import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react/cjs/react.production.min';

import './Home.scss'
import Photo from "./photo.jpg"

const TypeWritter = React.lazy(()=> import('./TypeWritter'));

export default function Home() {
  const { t } = useTranslation();

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

        <h1>{t('hello_im')} <span>{t('Abdurasul')}</span> </h1>

        <div className="typewritter">
        <Suspense fallback={<div></div>}>
          <TypeWritter/>
        </Suspense>
        </div>

        <p>
          {t('enthusiastic_about_web_dev_world')}
        </p>
      </div>
    </div>
    );
}
