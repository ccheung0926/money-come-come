import React from 'react';
import Main from './Main.jsx';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';

const App = () => {
    return (
        <div>
            <header>
            <div className="header-left">
                <h2 className="h2">Booking Go</h2>
                <TextField
                  hintText="Friend"
                  floatingLabelText="Refer Your Friend"
                  defaultValue="https://youtu.be/ewzY-vXJAsU"
                  type="text"
                />
            </div>
            <div className="user">
                <p>Welcome back! Cindy</p>
                Points: 1000 points
                <p className="button header-btn"><Link to={`/reward`}>Redeem Your Gift </Link></p>
            </div>
            </header>
            <Main />
        </div>
    );
};
export default App
