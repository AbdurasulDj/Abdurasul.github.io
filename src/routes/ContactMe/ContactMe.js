import React from 'react';
import './ContactMe.scss'

export default function ContactMe() {
  const [data, setData] = React.useState({
    name: '',
    email: '',
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

  function handleSubmit(event) {
    event.preventDefault()
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
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={handleChange} placeholder="Your name" value={data.name}/>
          <input type="email" name="email" onChange={handleChange} placeholder="Your email" value={data.email} />
          <textarea name="message" onChange={handleChange} placeholder="Your message" value={data.message}/>
          <button id='submit'>Send</button>
        </form>
      </div>
    </div>
    );
}
