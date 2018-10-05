import React, { Component } from "react";

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
    } else {
      this.setState({
        error: true,
      });
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
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

export default MapView;
