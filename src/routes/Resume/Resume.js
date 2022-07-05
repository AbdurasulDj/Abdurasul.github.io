import React from 'react';
import './Resume.scss'

import Content from "./Content/Content"
import Headers from "./Headers/Headers"



export default function Resume() {
  const [headers, setHeaders] = React.useState([
    {
      active: true,
      href: "#resume-education",
      icon: 'school',
    },
    {
      active: false,
      href: "#resume-history",
      icon: 'briefcase',
    },
    {
      active: false,
      href: "#resume-skills",
      icon: 'code-slash',
    },
    {
      active: false,
      href: "#resume-projects",
      icon: 'bar-chart',
    },
    {
      active: false,
      href: "#resume-interests",
      icon: 'game-controller',
    }
  ])

  const [ skillsClicked, setSkillsClicked] = React.useState( false)

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
