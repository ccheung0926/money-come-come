import React, { Component } from 'react';
import TravelMap from "./TravelMap.jsx";
import travel from "./travel.js";
import DatePicker from 'react-datepicker';


class Home extends Component  {
  constructor(props) {
    super(props);
    this.state = {isCustomize: false};
    this.customizeClick = this.customizeClick.bind(this);
  }
  customizeClick() {
    if(this.state.isCustomize){
      this.setState({isCustomize: false})
    }
    else{
       this.setState({isCustomize: true})
    }
  }
  render() {
    return (
          <div className="itinerary">
            <div onClick={this.customizeClick} className="button">
              {this.state.isCustomize ? <p>Special Deal For You</p> : <p>Customized Your Itinerary</p> }
            </div>
            {
              this.state.isCustomize ? 
              <div className="customize image-wrapper">
                <input type="text" value="Changi Aiport (SIN)" />  
              </div> : 
              <div className="image-wrapper">
                { travel.map(function(data, i){
                  return (
                    <div key={i} className="image-wrapper">
                      <img src={data.image} />
                      <p>{data.title}</p>
                      <p>{data.date} {data.price}</p>
                    </div>
                  )
                })
              }
          </div>
            }
            
            
          <TravelMap />
        </div>
      )
  }
};

export default Home
