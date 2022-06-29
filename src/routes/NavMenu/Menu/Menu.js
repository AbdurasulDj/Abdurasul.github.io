import React from 'react';
import './Menu.scss';

export default function Menu(props) {
  return (
    <div className={"menu-container " + (props.menuOpened && "active")}>
        <ul>
          <li>
            <a href="#home" onClick={props.handleClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutMe" onClick={props.handleClick}>
              About me
            </a>
          </li>
          <li>
            <a href="#resume" onClick={props.handleClick}>
              Resume
            </a>
          </li>
          {/* <li>
            <a href="#testimonial" onClick={props.handleClick}>
              Testimonial
            </a>
          </li> */}
          <li>
            <a href="#contactMe" onClick={props.handleClick}>
              Contact Me
            </a>
          </li>
        </ul>
    </div>
    );
}
