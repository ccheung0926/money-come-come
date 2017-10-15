import React from 'react';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

export default class Booking extends React.Component {
    render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        marginLeft: 100,
        width: 600,
      },
    };
    return (
      <div className="booking">
      <section>
        <ul>
          <li className="from">SFO <i className="fa fa-plane" aria-hidden="true"></i></li>
          <li className="to">BCN <i className="fa fa-plane" aria-hidden="true"></i></li>
          <li className="to">SIN <i className="fa fa-plane" aria-hidden="true"></i></li>
          <li className="final">BKK</li>
        </ul>
      </section>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
            >
              <Subheader>Booking</Subheader>
              <GridTile>
                <TextField
                  hintText="First Name"
                  floatingLabelText="First Name"
                  defaultValue="Cindy"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  defaultValue="Cheung"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="Email"
                  floatingLabelText="Email"
                  defaultValue="ccc@siasample.com"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="Date of birth"
                  floatingLabelText="Date of birth"
                  defaultValue="11/11/2001"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="Date"
                  floatingLabelText="Date"
                  defaultValue="11/7/2017 - 11/31/2017"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="Departure"
                  floatingLabelText="Departure"
                  defaultValue="SFO 11/7/2017"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="1st Stop Departure"
                  floatingLabelText="1st Stop Departure"
                  defaultValue="BCN 11/11/2017"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="2nd Stop Departure"
                  floatingLabelText="2nd Stop Departure"
                  defaultValue="SIN 11/17/2017"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="3rd Stop Departure"
                  floatingLabelText="3rd Stop Departure"
                  defaultValue="BKK 11/24/2017"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="Returned"
                  floatingLabelText="Returned"
                  defaultValue="SFO 11/31/2017"
                  type="text"
                />
              </GridTile>
              <GridTile>
                <TextField
                  hintText="Credit Card"
                  floatingLabelText="Credit Card"
                  defaultValue="1234567890"
                  type="text"
                />
                <RaisedButton label="Submit" primary={true}/>
              </GridTile>
          </GridList>
        </div>
      </div>
    )
  }
}