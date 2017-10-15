import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Reward from './Reward.jsx';
import Home from './Home.jsx';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/reward' component={Reward}/>
    </Switch>
  </div>
)

export default Main
