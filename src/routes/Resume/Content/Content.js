import Education from './components/Education'
import History from './components/History'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Interests from './components/Interests'
import { useTranslation } from 'react-i18next';

import './Content.scss'

export default function Content(props) {
  const {t} = useTranslation()

  return (
    <div className="resume-content-container">
          <div className='resume-content' id="resume-education">
            <div className="headers">
              <h1>{t('education')}</h1>
            </div>
            <Education/>
          </div>

          <div className='resume-content' id="resume-history">
            <div className="headers">
              <h1>{t('work_history')}</h1>
            </div>
            <History/>
          </div>
          <div className='resume-content' id="resume-skills">
            <div className="headers">
              <h1>{t('skills')}</h1>
            </div>
            <Skills 
              skillsClicked={props.skillsClicked}
            />
          </div>
          <div className='resume-content' id="resume-projects">
            <div className="headers">
              <h1>{t('projects')}</h1>
            </div>
            <Projects/>
          </div>
          <div className='resume-content' id="resume-interests">
            <div className="headers">
              <h1>{t('interests')}</h1>
            </div>
            <Interests/>
          </div> 
        </div>
  )
}
