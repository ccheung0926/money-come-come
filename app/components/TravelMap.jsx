import React from 'react';
// import ReactMapboxGl, { Layer, Feature, Source } from "react-mapbox-gl";
// import along from "turf-along";
// import turfLineDistance from "turf-line-distance";

// const Map = ReactMapboxGl({
//   accessToken: "pk.eyJ1IjoicGFuZGFmaXJlYmFsbCIsImEiOiJjajhyeWM2NzUwMms2MzJwMHB5Y2Zqb2E3In0.Jsw5PfO81DtWY3AIpC-Zrw"
// });

export default class TravelMap extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         origin: [-122.414, 37.776],
    //         destination: [-77.032, 38.913],
    //         route: {},
    //         point: {},
    //         lineDistance: null,
    //         arc: [],
    //         routeJson: {},
    //         pointJson: {},
    //         counter: 0
    //     };
    // }

    // componentWillMount() {
    //     this.setState({route: {
    //         "type": "FeatureCollection",
    //         "features": [{
    //             "type": "Feature",
    //             "geometry": {
    //                 "type": "LineString",
    //                 "coordinates": [
    //                     this.state.origin,
    //                     this.state.destination
    //                 ]
    //             }
    //         }]
    //     }});

    //     this.setState({point: {
    //         "type": "FeatureCollection",
    //         "features": [{
    //             "type": "Feature",
    //             "geometry": {
    //                 "type": "Point",
    //                 "coordinates": this.state.origin
    //             }
    //         }]
    //     }});
    //     // Calculate the distance in kilometers between route start/end point.
    //     this.setState({
    //         lineDistance: turfLineDistance(route.features[0], 'kilometers')
    //     });

    //     var arc = [];

    //     // // Draw an arc between the `origin` & `destination` of the two points
    //     for (var i = 0; i < lineDistance; i++) {
    //         var segment = along(route.features[0], i / 1000 * lineDistance, 'kilometers');
    //         this.setState({arc: this.state.arc.push(segment.geometry.coordinates)});
    //     }

    //     // // Update the route with calculated arc coordinates
    //     this.setState({
    //         route: {
    //             features: [{
    //                 geometry: {
    //                     coordinates: this.state.arc
    //                 }
    //             }]
    //         }
    //     });

    // }
    // pointJsonMark() {
    //     this.setState({
    //         pointJson: {
    //             "type": "geojson",
    //             "data": this.state.point
    //         }
    //     });
    // }

    // routeJsonMark() {
    //     this.setState({
    //         routeJson: {
    //             "type": "geojson",
    //             "data": this.state.route
    //         }
    //     });
    // }



    // animate() {
    //     // Update point geometry to a new position based on counter denoting
    //     // the index to access the arc.
    //     this.setState({
    //         point: {
    //             features: [{
    //                 geometry: {
    //                     coordinates: this.state.route.features[0].geometry.coordinates[counter]
    //                 }
    //             }]
    //         }
    //     });

    //     // Update the source with this new data.
    //     map.getSource('point').setData(point);

    //     // Request the next frame of animation so long as destination has not
    //     // been reached.
    //     if (point.features[0].geometry.coordinates[0] !== destination[0]) {
    //         requestAnimationFrame(animate);
    //     }

    //     counter = counter + 1;
    // }

    componentDidMount() {
        window.travelMap();
    }
    render() {
        return (
            <div id="map">
                {/* <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    zoom={[3]}
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                    <Source id="source_route" geoJsonSource={RASTER_SOURCE_OPTIONS} />
                    <Source id="source_point" geoJsonSource={RASTER_SOURCE_OPTIONS} />
                    <Layer
                        id="route"
                        sourceId="route"
                        type="line"
                        paint={{
                            "line-width": 2,
                            "line-color": "#007cbf"
                         }}>
                     </Layer>
                    <Layer
                        id="point"
                        sourceId="point"
                        type="symbol"
                        paint={{
                            "icon-image": "airport-15",
                            "icon-rotate": 90
                         }}>
                     </Layer>
                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}>
                        <Feature coordinates={[-96, 37.8]}/>
                    </Layer>
                </Map> */}
            </div>
        )
    }
};

// mapboxgl.accessToken = '<your access token here>';
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     center: [-96, 37.8],
//     zoom: 3
// });

// // San Francisco
// var origin = [-122.414, 37.776];

// // Washington DC
// var destination = [-77.032, 38.913];

// // A simple line from origin to destination.
// var route = {
//     "type": "FeatureCollection",
//     "features": [{
//         "type": "Feature",
//         "geometry": {
//             "type": "LineString",
//             "coordinates": [
//                 origin,
//                 destination
//             ]
//         }
//     }]
// };

// // A single point that animates along the route.
// // Coordinates are initially set to origin.
// var point = {
//     "type": "FeatureCollection",
//     "features": [{
//         "type": "Feature",
//         "geometry": {
//             "type": "Point",
//             "coordinates": origin
//         }
//     }]
// };

// // Calculate the distance in kilometers between route start/end point.
// var lineDistance = turf.lineDistance(route.features[0], 'kilometers');

// var arc = [];

// // Draw an arc between the `origin` & `destination` of the two points
// for (var i = 0; i < lineDistance; i++) {
//     var segment = turf.along(route.features[0], i / 1000 * lineDistance, 'kilometers');
//     arc.push(segment.geometry.coordinates);
// }

// // Update the route with calculated arc coordinates
// route.features[0].geometry.coordinates = arc;

// // Used to increment the value of the point measurement against the route.
// var counter = 0;

// map.on('load', function () {
//     // Add a source and layer displaying a point which will be animated in a circle.
//     map.addSource('route', {
//         "type": "geojson",
//         "data": route
//     });

//     map.addSource('point', {
//         "type": "geojson",
//         "data": point
//     });

//     map.addLayer({
//         "id": "route",
//         "source": "route",
//         "type": "line",
//         "paint": {
//             "line-width": 2,
//             "line-color": "#007cbf"
//         }
//     });

//     map.addLayer({
//         "id": "point",
//         "source": "point",
//         "type": "symbol",
//         "layout": {
//             "icon-image": "airport-15",
//             "icon-rotate": 90
//         }
//     });

//     function animate() {
//         // Update point geometry to a new position based on counter denoting
//         // the index to access the arc.
//         point.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter];

//         // Update the source with this new data.
//         map.getSource('point').setData(point);

//         // Request the next frame of animation so long as destination has not
//         // been reached.
//         if (point.features[0].geometry.coordinates[0] !== destination[0]) {
//             requestAnimationFrame(animate);
//         }

//         counter = counter + 1;
//     }

//     document.getElementById('replay').addEventListener('click', function() {
//         // Set the coordinates of the original point back to origin
//         point.features[0].geometry.coordinates = origin;

//         // Update the source layer
//         map.getSource('point').setData(point);

//         // Reset the counter
//         counter = 0;

//         // Restart the animation.
//         animate(counter);
//     });

//     // Start the animation.
//     animate(counter);
// });
