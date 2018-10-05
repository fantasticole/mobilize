import React, { Component } from "react";
import PropTypes from "prop-types";

import Event from "./Event";

import { eventPropType } from "../utils/propTypes";

class ListView extends Component {
  render() {
    const {
      events,
      error,
      getEvents,
      updateZip,
    } = this.props;

    return (
      <div className="events">
        <div className="form">
          <p>Enter zip:</p>
          <input
            type="number"
            name="zipcode"
            defaultValue="10001"
            placeholder="zip code"
            onChange={updateZip}
          />
          <button onClick={getEvents}>Update</button>
        </div>
        {error && <p className="error">{error.message}</p>}
        <div className="eventList">
          {events.map(event => (<Event event={event} key={event.id}/>))}
        </div>
      </div>
    );
  }
}

ListView.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  events: PropTypes.arrayOf(eventPropType),
  getEvents: PropTypes.func.isRequired,
  updateZip: PropTypes.func.isRequired,
};

ListView.defaultProps = {
  error: null,
  events: [],
};

export default ListView;
