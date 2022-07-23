import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.scss'

export default function ContactMe() {

  // state of form data
  const [formData, setFormData] = React.useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  
  // state of data sent or not
  const [sent, setSent] = React.useState(false)
  

  // store form data in state
  function handleChange(event) {
    setFormData( prevData => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  // check if form filled and trigger send button
  React.useEffect( () => {
    if (
      formData.user_name.length >= 2 &&
      formData.user_email.length >= 5 &&
      formData.message.length >= 15
    )  {
      console.log('g message')
    } else {
      console.log('b message')
    }
  }, [formData])


  // send form data
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q1ticzm', 'template_twkixn9', form.current, 'x0jRGgktNpxClXGtk')
      .then((result) => {
          setSent(true)
          console.log('set to true');
          const myTimer = setTimeout(() => {
            setSent(false)
            console.log('set to false');
            clearTimeout(myTimer)
          }, 5000);
      }, (error) => {
          console.log(error.text);
      });
  };

  // styles of send button
  const displaedCheck = {
    display: 'inline',
    width: '100%',
    transition: 'width 1s'
  }

  const hiddenCheck = {
    display: 'none',
    width: '0%'
  }

  return (
    <div className="contactme-container" id='contactMe'>
      <div className='contactme-card-container'>
        <div>
          <h1>Contact me</h1>
          <div className="shyning">
            <span></span>
            <span></span>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" onChange={handleChange} placeholder="Your name" value={formData.name}/>
          <input type="email" name="user_email" onChange={handleChange} placeholder="Your email" value={formData.email} />
          <textarea name="message" onChange={handleChange} placeholder="Your message" value={formData.message}/>
          <button id='submit'>
            Send
            <span style={sent ? displaedCheck : hiddenCheck}>
              &nbsp;
              <ion-icon name="checkmark-outline"></ion-icon>
            </span>
          </button>
        </form>
      </div>
    </div>
    );
}
