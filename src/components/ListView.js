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
    const { events } = this.props;

    return (
      <div className="events">
        <h1>events:</h1>
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
