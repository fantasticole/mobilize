import React, { Component } from "react";

import { eventPropType } from "../utils/propTypes";

class Event extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className="eventListItem" key={event.id}>
        {event.featured_image_url && (<img src={event.featured_image_url} alt={event.summary} />)}
        <a href={event.browser_url}>
          <h3>{event.title}</h3>
          <p>({event.timezone})</p>
        </a>
        <p className="eventDesc">{event.description}</p>
        <p className="eventSum">{event.summary}</p>
        <div className="eventDetail">
          <p className="label">Type: </p>
          <p className="detail">{event.event_type}</p>
        </div>
        <div className="eventDetail">
          <p className="label">Created: </p>
          <p className="detail">{event.created_date}</p>
        </div>
        <div className="eventDetail">
          <p className="label">Updated: </p>
          <p className="detail">{event.modified_date}</p>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  events: eventPropType.isRequired,
};

export default Event;
