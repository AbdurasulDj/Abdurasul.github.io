import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './routes/Preloader/Preloader'
import "./i18n/i18n"
import { Suspense } from 'react/cjs/react.development';

// import App from './App'

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader/>}>
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
