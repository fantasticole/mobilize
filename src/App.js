import React, { Component } from "react";

import MapView from "./components/MapView";
import ListView from "./components/ListView";

import "./styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  // organization_id: One or more Organization IDs to filter to. If multiple, should be supplied as multiple query params, e.g., organization_id=1&organization_id=2, etc.
  // updated_since: Unix timestamp to filter by Events’ modified_date
  // timeslot_start: Comparison to filter by Events' Timeslots' start date. Will only return Timeslots on those Events that meet the filter conditions
  // timeslot_end: Comparison to filter by Events' Timeslots' end date. Will only return Timeslots on those Events that meet the filter conditions
  // zipcode: Zipcode to filter by Events' Locations' postal code. If present, will return Events sorted by distance from zipcode. When zipcode is provided, virtual events will not be returned.
  // max_dist: Maximum distance (in miles) to filter by Events' Locations' distance from provided zipcode.
  getEvents = () => {
    const options = {
      method: "GET",
      zipcode: 11225,
      // organization_id
      // updated_since
      // timeslot_start
      // timeslot_end
      // zipcode
      // max_dist
    };

    fetch("https://events.mobilizeamerica.io/api/v1/events", options)
      .then(response => response.json())
      .then((res) => {
        this.setState({ events: res.data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { events, error } = this.state;

    return (
      <div className="App">
        <ListView error={error} events={events}/>
        <MapView events={events} />
      </div>
    );
  }
}

export default App;
