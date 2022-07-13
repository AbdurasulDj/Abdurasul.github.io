import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.scss'

export default function ContactMe() {
  const [data, setData] = React.useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  function handleChange(event) {
    setData( prevData => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q1ticzm', 'template_twkixn9', form.current, 'x0jRGgktNpxClXGtk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
          <input type="text" name="user_name" onChange={handleChange} placeholder="Your name" value={data.name}/>
          <input type="email" name="user_email" onChange={handleChange} placeholder="Your email" value={data.email} />
          <textarea name="message" onChange={handleChange} placeholder="Your message" value={data.message}/>
          <button id='submit'>Send</button>
        </form>
      </div>
    </div>
    );
}
