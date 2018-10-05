import React, { Component } from "react";

import MapView from "./components/MapView";
import ListView from "./components/ListView";

import "./styles/App.css";

class App extends Component {
  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    fetch("https://events.mobilizeamerica.io/api/v1/events")
      .then(response => response.json())
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  render() {
    return (
      <div className="App">
        <MapView />
        <ListView />
      </div>
    );
  }
}

export default App;
