import React from 'react';
import Main from './Main.jsx';
import { Link } from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <h2>Booking Go</h2>
      <div className="user">
        <p>Welcome back! Cindy</p>
        Points: 1000 points
        <p className="button"><Link to={`/reward`}>Redeem Your Gift </Link></p>
      </div>
    </header>
    <Main />
  </div>
)
export default App
