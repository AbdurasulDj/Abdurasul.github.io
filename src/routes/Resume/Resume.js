import React from 'react';
import './Resume.scss'

import Content from "./Content/Content"
import Headers from "./Headers/Headers"



export default function Resume() {
  return (
    <div className='resume-container' id='resume'>
      <div className="resume-card-container">
        <Content />
        <Headers />
      </div>
    </div>
    );
}
