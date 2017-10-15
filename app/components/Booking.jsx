import React from 'react';

export default class Booking extends React.Component {
    render() {
        return (
          <div className="booking">
          <form>
           <fieldset>
            <legend>Booking:</legend>
            First Name: <input type="text" value="Cindy" /><br />
            Last Name: <input type="text" value="Cheung" /><br />
            Email: <input type="text" value="ccc@siasample.com"/><br />
            Date of birth: <input type="text" value="11/11/2001" /><br />
            Date: <input type="text" value="11/23/2017 - 11/31/2017" />
            Departure: <input type="text" value="SFO" />
            Arrival: <input type="text" value="SIN" />
           </fieldset>
          </form>
          </div>
        )
    }
}