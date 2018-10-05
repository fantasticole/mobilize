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
    if (window.mapboxgl) {
      this.createMap();
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

  createMap = () => {
    const { mapboxgl } = window;

    // set Mapbox access token
    mapboxgl.accessToken = "pk.eyJ1IjoiZmFudGFzdGljb2xlIiwiYSI6ImNqbXdncWpvdzAwcHIzcmxscGx6cnF0OWQifQ.uLqi6l2hvGms7WHbI6Hm7Q";
    // create the map, setting it in the "#map" div
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
    });
    // show nav in upper left-hand corner
    const nav = new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
    });
    this.map.addControl(nav, "top-left");
    // set map bounds and markers
    this.setMap();
  }

  setMap = () => {
    const { mapboxgl } = window;

    if (this.props.events.length) {
      // filter events for those with locations set
      const locs = this.props.events.filter(event => (event.location && event.location.location));
      const first = locs[0].location.location;
      // get the outermost coordinates
      let minLat = first.latitude;
      let minLon = first.longitude;
      let maxLat = first.latitude;
      let maxLon = first.longitude;
      locs.forEach(l => {
        if (l.location.location.longitude > maxLon) {
          maxLon = l.location.location.longitude;
        }
        if (l.location.location.longitude < minLon) {
          minLon = l.location.location.longitude;
        }
        if (l.location.location.latitude > maxLat) {
          maxLat = l.location.location.latitude;
        }
        if (l.location.location.latitude < minLat) {
          minLat = l.location.location.latitude;
        }
      });
      // create the map's bounds
      const mapBounds = new mapboxgl.LngLatBounds([
        [minLon, minLat],
        [maxLon, maxLat],
      ]);
      // apply those bounds to the map
      this.map.fitBounds(mapBounds);

      // create a marker with a popup for each event
      locs.forEach(e => {
        const { location } = e.location;
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <h3>${e.title}</h3>
            <a href="${e.browser_url}">event site</a>
            <p>${e.summary}</p>
          `);

        new mapboxgl.Marker()
          .setLngLat([location.longitude, location.latitude])
          .setPopup(popup)
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
