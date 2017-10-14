console.log('Hello World!');

import React from 'react';
import { render } from 'react-dom';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import SCSS from './styles/app.scss';

const appData = {
    title: 'World!'
};

render(
    <WelcomeMessage data={appData} />, document.getElementById('container')
);