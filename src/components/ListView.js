import React, { Component } from "react";
import PropTypes from "prop-types";

import { eventPropType } from "../utils/propTypes";

class ListView extends Component {
  render() {
    console.log(this.props)
    return (
      <h1>list</h1>
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
