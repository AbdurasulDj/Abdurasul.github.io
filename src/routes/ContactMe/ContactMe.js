import React from 'react'
import { useTranslation } from 'react-i18next';

import './ContactMe.scss'
import Form from './components/Form';
import Modal from './components/Modal';

// SHOW WARNING popup from right bottom corner

export default function ContactMe() {
  // i18n
  const { t} = useTranslation();

  // state of data sent or not
  const [sent, setSent] = React.useState(false)
  
  // state of error of sending or not
  const [error, setError] = React.useState(false)
  
  return (
    <div className="contactme-container" id='contactMe'>
      <div className='contactme-card-container'>
        <div>
          <h1>{t('contact_me')}</h1>
          <div className="shyning">
            <span></span>
            <span></span>
          </div>
        </div>
        <Form
          sent={sent}
          setSent={setSent}
          setError={setError}
        />
      </div>

      <Modal
        sent={sent}
        error={error}
      />
    </div>
  );
}