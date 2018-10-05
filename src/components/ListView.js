import React, { Component } from "react";
import PropTypes from "prop-types";

import Event from "./Event";

import { eventPropType } from "../utils/propTypes";

  // contact: PropTypes.????,
  // high_priority: PropTypes.????,
  // location: locationPropType,
  // sponsor: sponsorPropType,
  // timeslots: PropTypes.arrayOf(timeslotPropType),

class ListView extends Component {
  render() {
    const { events, error } = this.props;

    return (
      <div className="events">
        <h1>events:</h1>
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
};

ListView.defaultProps = {
  error: null,
  events: false,
};

export default ListView;
