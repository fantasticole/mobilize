import React, { Component } from "react";

import { eventPropType } from "../utils/propTypes";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  toggleDetails = () => {
    this.setState(({ expanded }) => ({
      expanded: !expanded,
    }));
  }

  render() {
    const { event } = this.props;

    const { expanded } = this.state;

    if (expanded) {
      return (
        <div className="eventListItem expanded" key={event.id} onClick={this.toggleDetails}>
          <div className="imgCont">
            {event.featured_image_url && <img src={event.featured_image_url} alt={event.summary} />}
          </div>
          <div className="eventInfo">
            <h3>{event.title}</h3>
            <a href={event.browser_url} target="_blank" rel="noopener noreferrer">event site</a>
            <p className="eventDesc">{event.description}</p>
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
        </div>
      );
    }

    return (
      <div className="eventListItem" key={event.id} onClick={this.toggleDetails}>
        <div className="imgCont">
          {event.featured_image_url && <img src={event.featured_image_url} alt={event.summary} />}
        </div>
        <div className="eventInfo">
          <h3>{event.title}</h3>
          <a href={event.browser_url} target="_blank" rel="noopener noreferrer">event site</a>
          <p className="eventSum">{event.summary}</p>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  event: eventPropType.isRequired,
};

export default Event;
