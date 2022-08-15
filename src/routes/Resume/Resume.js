import React from 'react';
import Content from "./Content/Content"
import Headers from "./Headers/Headers"
import Data from "./resumeData.json"

import './Resume.scss'


export default function Resume() {
  const [headers, setHeaders] = React.useState([])

  const [ skillsClicked, setSkillsClicked] = React.useState( false)

  React.useEffect(()=> {
    setHeaders(Data)
  },[])

  function handleSkillsClicked(icon) {
    if (icon === 'code-slash') {
      setSkillsClicked(true)
    } else {
      setSkillsClicked(false)
    }
  }

  return (
    <div className='resume-container' id='resume'>
      <div className="resume-card-container">
        <Content 
          skillsClicked = {skillsClicked}
        />
        <Headers
          headers = {headers}
          setHeaders = {setHeaders}
          handleSkillsClicked = {handleSkillsClicked}
        />
      </div>
    </div>
    );
}
