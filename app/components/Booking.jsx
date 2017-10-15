import React from 'react';

export default class Booking extends React.Component {
    render() {
        return (
          <div className="booking">
          <section>
            <ul>
              <li className="from">SFO <i className="fa fa-plane" aria-hidden="true"></i></li>
              <li className="to">SIN <i className="fa fa-plane" aria-hidden="true"></i></li>
              <li className="final">BKK <i className="fa fa-plane" aria-hidden="true"></i></li>
            </ul>
          </section>
          <form>
           <fieldset>
            <legend>Booking:</legend>
            First Name: <input type="text" value="Cindy" /><br />
            Last Name: <input type="text" value="Cheung" /><br />
            Email: <input type="text" value="ccc@siasample.com"/><br />
            Date of birth: <input type="text" value="11/11/2001" /><br />
            Date: <input type="text" value="11/23/2017 - 11/31/2017" /><br />
            Departure: <input type="text" value="SFO" /><br />
            Arrival: <input type="text" value="SIN" /><br />
           </fieldset>
          </form>
          </div>
        )
    }
}