import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import WelcomeMessage from './components/App.jsx';
import Reward from './components/Reward.jsx';
import SCSS from './styles/app.scss';


render(
  (<BrowserRouter>
    <div>
      <Route path="/" component={WelcomeMessage} />
      <Route path="/reward" component={Reward} />
    </div>
  </BrowserRouter>), document.getElementById('container')
);