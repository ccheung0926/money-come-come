import React from 'react';
import rewardList from "./rewardList.js";

export default class Reward extends React.Component {
    render() {
        return (
          <div className="reward">
            <h1>You have 1000 points</h1>
            {rewardList.map(function(item, i) {
                return (
                  <div key={i} className="gift">
                    <img src={item.image} />
                    <p className="title">{item.title}</p>
                    <p>Point: {item.point}</p>
                  </div>
                )
              })
            }
          </div>
        )
    }
}