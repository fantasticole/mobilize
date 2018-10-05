import React, { Component } from "react";
import PropTypes from "prop-types";

import { eventPropType } from "../utils/propTypes";

  // contact: PropTypes.????,
  // high_priority: PropTypes.????,
  // location: locationPropType,
  // sponsor: sponsorPropType,
  // timeslots: PropTypes.arrayOf(timeslotPropType),

class ListView extends Component {
  render() {
    return (
      <div className="events">
        <h1>events:</h1>
        <ul className="eventList">
          {this.props.events.map(event => (
            <li className="eventListItem" key={event.id}>
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
            </li>
          ))}
        </ul>
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
