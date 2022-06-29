import React from 'react';
import './Topbar.scss'
import Logo from './Logo.svg'

export default function Topbar(props) {
  return (
    <div className={"topbar-container " + (props.menuOpened && 'active')}>
      <div className="wrapper">
        <div className="wrapper-left">
          <a href='#home'>
            <img src={Logo} alt="logo" className='wrapper-left--logo'/>
          </a>
        </div>
        <div className="wrapper-right">
          <div className="hamburger" onClick={props.handleClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
    );
}
