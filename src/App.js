import React from 'react'
import NavMenu from './routes/NavMenu/NavMenu'
import Home from './routes/Home/Home'
import AboutMe from './routes/AboutMe/AboutMe'
import Resume from './routes/Resume/Resume'
// import Testimonials from './routes/Testimonials/Testimonials'
import ContactMe from './routes/ContactMe/ContactMe'
// import Footer from './routes/Footer/Footer'
import './App.scss'

function App() {
  const [lang, setLang] = React.useState('')

  React.useEffect(()=> {
    let cookie = document.cookie
    let cookieLang = cookie.split("=")[1]
    setLang(cookieLang)
  }, [])
  
  return (
    <div className="app-container">
      <NavMenu setLang={setLang}/>
      <div className="sections-container">
        <Home lang={lang}/>
        <AboutMe />
        <Resume />
        {/* <Testimonials /> */}
        <ContactMe />
        {/* <Footer /> */}
      </div>

      {/* background bubbles */}
      <div className="bubble bubble-one"></div>
      <div className="bubble bubble-two"></div>
    </div>
  );
}

export default App;