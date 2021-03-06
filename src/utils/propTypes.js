import PropTypes from "prop-types";

export const contactPropType = PropTypes.shape({
  name: PropTypes.string,
  email_adddress: PropTypes.string,
  phone_number: PropTypes.string,
});

export const locationPropType = PropTypes.shape({
  address_lines: PropTypes.arrayOf(PropTypes.string),
  congressional_district: PropTypes.string,
  locality: PropTypes.string,
  location: PropTypes.shape({
    latitude: PropTypes.num,
    longitude: PropTypes.num,
  }),
  postal_code: PropTypes.string,
  region: PropTypes.string,
  state_leg_district: PropTypes.string,
  state_senate_district: PropTypes.string,
  venue: PropTypes.string,
});

export const sponsorPropType = PropTypes.shape({
  candidate_name: PropTypes.string,
  created_date: PropTypes.num,
  district: PropTypes.string,
  event_feed_url: PropTypes.string,
  id: PropTypes.num,
  is_coordinated: PropTypes.bool,
  is_independent: PropTypes.bool,
  is_primary_campaign: PropTypes.bool,
  modified_date: PropTypes.num,
  name: PropTypes.string,
  race_type: PropTypes.string,
  slug: PropTypes.string,
  state: PropTypes.string,
});

export const timeslotPropType = PropTypes.shape({
  end_date: PropTypes.num,
  id: PropTypes.num,
  start_date: PropTypes.num,
});

export const eventPropType = PropTypes.shape({
  browser_url: PropTypes.string,
  contact: contactPropType,
  created_date: PropTypes.num,
  description: PropTypes.string,
  event_type: PropTypes.string,
  featured_image_url: PropTypes.string,
  high_priority: PropTypes.bool,
  id: PropTypes.num,
  location: locationPropType,
  modified_date: PropTypes.num,
  sponsor: sponsorPropType,
  summary: PropTypes.string,
  timeslots: PropTypes.arrayOf(timeslotPropType),
  timezone: PropTypes.string,
  title: PropTypes.string,
});
