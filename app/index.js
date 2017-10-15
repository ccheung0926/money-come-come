import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import SCSS from './styles/app.scss';
import App from './components/App.jsx';


render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), 
  document.getElementById('container')
);
