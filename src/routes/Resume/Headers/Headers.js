import './Headers.scss'
import React from 'react'

export default function Headers(props) {
  
  function clickHandler(icon) {
    props.setHeaders( oldHeaders => oldHeaders.map( obj => {
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

  const li = props.headers.map( obj => {
    return (
      <li  key={obj.icon}  className={obj.active ? 'active' : ''}> 
        <a onClick={() => clickHandler(obj.icon) } href={obj.href}>
          <ion-icon name={obj.icon} onClick={() => props.handleSkillsClicked(obj.icon)}></ion-icon>
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
