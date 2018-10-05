import React, { Component } from "react";

import MapView from "./components/MapView";
import ListView from "./components/ListView";

import "./styles/App.css";

class App extends Component {
  componentWillMount() {}

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
