import React, { Component } from 'react';
import TravelMap from "./TravelMap.jsx";
import travel from "./travel.js";
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';


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
            <div onClick={this.customizeClick} className="button home">
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
                      <Link to={`/booking`}>
                        <img src={data.image} />
                        <p>{data.title}</p>
                        <p>{data.date} {data.price}</p>
                      </Link>
                    </div>
                  )
                })
              }
          </div>
            }
            
            
          <TravelMap clicked={this.state.isCustomize}/>
        </div>
      )
  }
};

export default Home
