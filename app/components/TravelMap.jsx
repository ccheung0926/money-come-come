import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicGFuZGFmaXJlYmFsbCIsImEiOiJjajhyeWM2NzUwMms2MzJwMHB5Y2Zqb2E3In0.Jsw5PfO81DtWY3AIpC-Zrw"
});

export default class TravelMap extends React.Component {
    render() {
        return (
            <div className="travel-map">
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                    height: "100vh",
                    width: "100vw"
                    }}>
                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                    </Layer>
                </Map>
            </div>
        )
    }
};
