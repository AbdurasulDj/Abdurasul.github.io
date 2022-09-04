import React from 'react';
import ReactDOM from 'react-dom';
import "./i18n/i18n"
import App from './App'

// Google Analytics
import ReactGA from 'react-ga';
const TRACKING_ID = "G-TEF9FTNZV4"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
