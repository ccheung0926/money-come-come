import React from 'react';
import Main from './Main.jsx';
import { Link } from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <div className="header-left">
        <h2 className="h2">Booking Go</h2>
        <h2 className="referral">Referral Your Friend:</h2>
        <input value="https://youtu.be/ewzY-vXJAsU" />
      </div>
      <div className="user">
        <p>Welcome back! Cindy</p>
        Points: 1000 points
        <p className="button header-btn"><Link to={`/reward`}>Redeem Your Gift </Link></p>
      </div>
    </header>
    <Main />
  </div>
)
export default App
