import React from 'react';

export default class Booking extends React.Component {
    render() {
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
          <form>
           <fieldset>
            <legend>Booking:</legend>
            First Name: <input type="text" value="Cindy" /><br />
            Last Name: <input type="text" value="Cheung" /><br />
            Email: <input type="text" value="ccc@siasample.com"/><br />
            Date of birth: <input type="text" value="11/11/2001" /><br />
            Date: <input type="text" value="11/7/2017 - 11/31/2017" /><br />
            Departure: <input type="text" value="SFO 11/7/2017" /><br />
            1st Stop Departure: <input type="text" value="BCN 11/11/2017" /><br />
            2nd Stop Departure: <input type="text" value="SIN 11/17/2017" /><br />
            3rd Stop Departure: <input type="text" value="BKK 11/24/2017" /><br />

            Returned: <input type="text" name="From" value="SFO 11/31/2017" /><br />
              <input type="text" name="To" value="SFO 11/31/2017" /><br />
             Credit Card: <input type="text" value="1234567890" /><br />
           </fieldset>
          </form>
          </div>
        )
    }
}