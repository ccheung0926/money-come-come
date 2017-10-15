import React from 'react';
import TravelMap from "./TravelMap.jsx";

const arr = ['singapore', 'indonesia', 'thailand', 'vietnam'];
const Home = () => (
    <div className="itinerary">
      <div className="image-wrapper">
        { arr.map(function(url){
          return <img src={"../app/images/" + url + ".jpg"} key={url} />
        })
        }
      </div>
      <TravelMap />
    </div>
);

export default Home
