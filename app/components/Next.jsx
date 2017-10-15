import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export default class Reward extends React.Component {
    render() {
        return (
          <div className="conclusion">
            <img src="/app/images/millenial.png" />
            <Link to={`/mike`}><RaisedButton on label="Next" primary={true}/></Link>
          </div>
        )
    }
}