import './Headers.scss'
import React from 'react'

export default function Headers() {

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

  function clickHandler(icon) {
    setHeaders( oldHeaders => oldHeaders.map( obj => {

        if (obj.icon === icon) {
          return obj.active === true ?
            { ...obj} 
            : {...obj, active: !obj.active}
        } else {
          return { ...obj, active: false}
        }
      })
    )
  }

  const li = headers.map( obj => {
    return (
      <li  key={obj.icon} onClick={() => clickHandler(obj.icon)} className={obj.active ? 'active' : ''}> 
        <a href={obj.href}>
          <ion-icon name={obj.icon}></ion-icon>
        </a>
        <span className='icon-span'></span>
      </li>
    )
  })
  
  return (
    <div className="resume-headers-container">
      <ul>
        {li}
      </ul>
    </div>
  )
}
