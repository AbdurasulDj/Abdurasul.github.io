import React from 'react';
import './AboutMe.scss'

export default function AboutMe() {
  return (
    <div className='aboutme-container' id='aboutMe'>
        <div className="aboutme-card-container">
          <div className="aboutme--header">
            <h2>About me</h2>
            <h4>Why Choose Me?</h4>
            <div>
              <span></span>
              <span></span>
            </div>      
          </div>
          <div className="aboutme--content">
            <div>
              <p>
                Front-end web developer with 
                knowledge of ReactJs and ability to
                build complex applications with utmost efficiency.
                Strong professional and communication skills.
              </p>
            </div>

            <div className="aboutme--highlights">
              <p>Here are a Few Highlights:</p>
              <ul>
                <li>
                  Frontend web development
                </li>
                <li>
                  Interactive Front End as per the design
                </li>
                <li>
                  Sass and scss 
                  lightweight and fast
                </li>
                <li>
                  JavaScript and Es6+
                  dominant of front-end
                </li>
                <li>
                  ReactJs one of the most
                  popular technologies
                </li>
                <li>
                  Git for source control
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    );
}
