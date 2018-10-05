import React, { Component } from "react";
import PropTypes from "prop-types";

import { eventPropType } from "../utils/propTypes";

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  componentDidMount() {
    const { mapboxgl } = window;

    if (mapboxgl) {
      mapboxgl.accessToken = "pk.eyJ1IjoiZmFudGFzdGljb2xlIiwiYSI6ImNqbXdncWpvdzAwcHIzcmxscGx6cnF0OWQifQ.uLqi6l2hvGms7WHbI6Hm7Q";
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/streets-v9"
      });
      this.setMap();
    } else {
      this.setState({
        error: true,
      });
    }
  }

  componentDidUpdate() {
    this.setMap();
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  setMap = () => {
    const { mapboxgl } = window;

    if (this.props.events.length) {
      // filter events for those with locations set
      const locs = this.props.events.filter(event => (event.location && event.location.location));
      // get the coordinates of each location
      const coordinates = locs.map(e => ([
        e.location.location.longitude,
        e.location.location.latitude,
      ]));

      // send those coordinates to the map
      new mapboxgl.LngLatBounds(coordinates);
      // var v2 = new mapboxgl.LngLatBounds([-73.9580807, 40.6663495])
      locs.forEach(l => {
        const { location } = l.location;
        const coor = [location.longitude, location.latitude];
        new mapboxgl.Marker()
          .setLngLat(coor)
          .addTo(this.map);
      })
    }
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div id="map" className="error">
          <h2>ERROR</h2>
          <p>There was an error loading the map. Sorry for any inconvenience.</p>
        </div>
      );
    }

    return (
      <div id="map" ref={m => this.mapContainer = m }/>
    );
  }
}

MapView.propTypes = {
  events: PropTypes.arrayOf(eventPropType),
};

MapView.defaultProps = {
  events: [],
};

export default MapView;
