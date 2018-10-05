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
      zipcode: 10001,
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  getEvents = () => {
    const params = {
      zipcode: this.state.zipcode,
      // organization_id
      // updated_since
      // timeslot_start
      // timeslot_end
      // max_dist
    };

    const url = new URL("https://events.mobilizeamerica.io/api/v1/events");
    url.search = new URLSearchParams(params);

    fetch(url)
      .then(response => response.json())
      .then((res) => {
        this.setState({
          events: res.data,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { events, error } = this.state;

    return (
      <div className="App">
        <ListView
          error={error}
          events={events}
          getEvents={this.getEvents}
          updateZip={this.handleChange}
        />
        <MapView events={events} />
      </div>
    );
  }
}

export default App;
