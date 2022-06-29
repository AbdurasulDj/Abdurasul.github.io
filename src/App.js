import NavMenu from './routes/NavMenu/NavMenu'
import Home from './routes/Home/Home'
import AboutMe from './routes/AboutMe/AboutMe'
import Resume from './routes/Resume/Resume'
import Testimonials from './routes/Testimonials/Testimonials'
import ContactMe from './routes/ContactMe/ContactMe'
import Footer from './routes/Footer/Footer'
import './App.scss'

function App() {
  return (

    <div className="app-container">
      <NavMenu />
      <div className="sections-container">
        <Home />
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

// <div className="app-container">
// <NavMenu />
// <div className="sections-container">
// <Routes>
//   <Route path='/' element={<Home />} exact />
//   <Route path='/aboutme' element={<AboutMe />} />
//   <Route path='/resume' element={<Resume />} />
//   <Route path='/testimonials' element={<Testimonials />} />
//   <Route path='/contactme' element={<ContactMe />} />
//   <Route path='/footer' element={<Footer />} />
// </Routes>

// </div>

// {/* background bubbles */}
// <div className="bubble bubble-one"></div>
// <div className="bubble bubble-two"></div>
// </div>
// </BrowserRouter>
