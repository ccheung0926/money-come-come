import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reward from './Reward';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render
(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/reward" component={Reward} />
    </div>
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
