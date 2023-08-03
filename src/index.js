import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import reportWebVitals from './reportWebVitals';
import Home from './components/screen/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
