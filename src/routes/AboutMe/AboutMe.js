import React from 'react';
import { useTranslation } from 'react-i18next';

import './AboutMe.scss'

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className='aboutme-container' id='aboutMe'>
        <div className="aboutme-card-container">
          <div className="aboutme--header">
            <h2>{t('about_me')}</h2>
            <h4>{t('why_choose_me')}</h4>
            <div>
              <span></span>
              <span></span>
            </div>      
          </div>
          <div className="aboutme--content">
            <div>
              <p>
              {t('about_me_paragraph')}
              </p>
            </div>

            <div className="aboutme--highlights">
              <p>{t('about_me_highlights')}</p>
              <ul>
                <li>
                  {t('about_me_li_1')}
                </li>
                <li>
                  {t('about_me_li_2')}
                </li>
                <li>
                  {t('about_me_li_3')}
                </li>
                <li>
                  {t('about_me_li_4')}
                </li>
                <li>
                  {t('about_me_li_5')}
                </li>
                <li>
                  {t('about_me_li_6')}
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    );
}
