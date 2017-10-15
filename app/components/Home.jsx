import React from 'react';
import TravelMap from "./TravelMap.jsx";
import travel from "./travel.js";
console.log(travel);

const Home = () => (
    <div className="itinerary">
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
      <TravelMap />
    </div>
);

export default Home
