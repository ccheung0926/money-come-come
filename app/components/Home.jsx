import React, { Component } from 'react';
import TravelMap from "./TravelMap.jsx";
import travel from "./travel.js";
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';


class Home extends Component  {
  constructor(props) {
    super(props);
    this.state = {isCustomize: false, moved: false};
    this.customizeClick = this.customizeClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }
  customizeClick() {
    if(this.state.isCustomize){
      this.setState({isCustomize: false})
    }
    else{
       this.setState({isCustomize: true})
    }
  }

  handleOnMouseEnter(e) {
    e.preventDefault();
    this.setState({
      moved: true
    });
  }

  handleOnMouseLeave(e) {
    e.preventDefault();    
    this.setState({
      moved: false
    });
  }

  render() {
    var that = this;
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
                      <Link to={`/booking`} onMouseEnter={that.handleOnMouseEnter} onMouseLeave={that.handleOnMouseLeave}>
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
            
            
          <TravelMap moved={this.state.moved}/>
        </div>
      )
  }
};

export default Home
