import './Content.scss'
import Education from './components/Education'
import History from './components/History'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Interests from './components/Interests'

export default function Content(props) {
  return (
    <div className="resume-content-container">
          <div className='resume-content' id="resume-education">
            <div className="headers">
              <h1>Education</h1>
            </div>
            <Education/>
          </div>

          <div className='resume-content' id="resume-history">
            <div className="headers">
              <h1>Work history</h1>
            </div>
            <History/>
          </div>
          <div className='resume-content' id="resume-skills">
            <div className="headers">
              <h1>Skills</h1>
            </div>
            <Skills 
              skillsClicked={props.skillsClicked}
            />
          </div>
          <div className='resume-content' id="resume-projects">
            <div className="headers">
              <h1>Projects</h1>
            </div>
            <Projects/>
          </div>
          <div className='resume-content' id="resume-interests">
            <div className="headers">
              <h1>Interests</h1>
            </div>
            <Interests/>
          </div> 
        </div>
  )
}
