import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import './Menu.scss';

export default function Menu(props) {
  const {t} = useTranslation()

  function languageChanged(lang) {
    i18next.changeLanguage(lang)
    props.setLang(lang)
  } 
  return (
    <div className={"menu-container " + (props.menuOpened && "active")}>
        <ul>
          <li>
            <a href="#home" onClick={props.handleClick}>
              {t('home_page')}
            </a>
          </li>
          <li>
            <a href="#aboutMe" onClick={props.handleClick}>
              {t('about_me')}
            </a>
          </li>
          <li>
            <a href="#resume" onClick={props.handleClick}>
              {t('resume')}
            </a>
          </li>
          {/* <li>
            <a href="#testimonial" onClick={props.handleClick}>
              Testimonial
            </a>
          </li> */}
          <li>
            <a href="#contactMe" onClick={props.handleClick}>
              {t('contact_me_menu')}
            </a>
          </li>
          <li className='languages-container'>
            <span
              onClick={()=>languageChanged("uz")}
            >
              {t('uz')}
            </span>
            <span
              onClick={()=>languageChanged("ru")}
            >
              {t('ru')}
            </span>
            <span
              onClick={()=>languageChanged("en")}
            >
              {t('en')}
            </span>
          </li>
        </ul>
    </div>
    );
}
