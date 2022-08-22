import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

import Button from './Button';
import '../ContactMe.scss'


export default function Form({sent,setSent}) {
    // i18n
    const { t } = useTranslation();
    
    // state of form filled or not
    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    
    // state of form data
    const [formData, setFormData] = React.useState({
        from_name: '',
        user_email: '',
        message: ''
    })

    // check form filled or not 
    function checkFill() {
        if (
        formData.from_name.length >= 2 &&
        formData.user_email.length >= 5 &&
        formData.message.length >= 10
        )  {
        setButtonDisabled(false)
        } else {
        setButtonDisabled(true)
        }
    } 

    //  trigger send button
    React.useEffect( () => {
        checkFill()
    }, [formData])

    // send form data
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_q1ticzm', 'template_twkixn9', form.current, 'x0jRGgktNpxClXGtk')
        .then((result) => {
            setSent(true)
            const myTimer = setTimeout(() => {
                setSent(false)
                clearTimeout(myTimer)
            }, 5000);
        }, (error) => {
            console.log(error.text);
        });
    };

    // store form data in state
    function handleChange(event) {
        setFormData( prevData => {
        return {
            ...prevData,
            [event.target.name] : event.target.value
        }
        })
    }

    return(
        <form ref={form} onSubmit={buttonDisabled ? ()=>{return} : sendEmail}>
          <input 
            type="text" 
            name="from_name" 
            onChange={handleChange}
            placeholder={t('your_name')} 
            value={formData.name}

            />
          <input 
            type="email" 
            name="user_email" 
            onChange={handleChange}
            placeholder={t('your_email')} 
            value={formData.email} 

            />
          <textarea 
            name="message" 
            onChange={handleChange} 
            placeholder={t('your_message')}
            value={formData.message}

            />

            <Button
              buttonDisabled={buttonDisabled}
              sent={sent}
            />
        </form>
    )
};
