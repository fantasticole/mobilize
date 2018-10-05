import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import Event from "./components/Event";
import ListView from "./components/ListView";
import MapView from "./components/MapView";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const events = [
  {
    "id": 26,
    "description": "Come and meet us at the Cherrywood Coffeehouse in Austin Texas!\n\nMake a difference while having fun! Just bring your phone all charged up and we'll take care of the rest!",
    "timezone": "America/Chicago",
    "title": "Cherrywood Neighborhood: Canvass for Julie!",
    "summary": "Canvass for Julie!",
    "featured_image_url": "https://mobilize-uploads-prod.s3.amazonaws.com/uploads/event/DXJ5lJRU0AEzf0p_20180305030842825057.jpg",
    "sponsor": {
      "id": 152,
      "name": "Julie Oliver for Congress",
      "slug": "julieoliver4congress",
      "is_coordinated": true,
      "is_independent": false,
      "is_primary_campaign": false,
      "state": "TX",
      "district": "25",
      "candidate_name": "Julie Oliver",
      "race_type": "CONGRESSIONAL",
      "event_feed_url": "https://events.mobilizeamerica.io/julieoliver4congress/",
      "created_date": 1515604602,
      "modified_date": 1534532489
    },
    "timeslots": [
      {
        "id": 161,
        "start_date": 1515862800,
        "end_date": 1515882600
      },
      {
        "id": 162,
        "start_date": 1515882600,
        "end_date": 1515898800
      },
      
    ],
    "location": {
      "venue": "Cherrywood Coffeehouse",
      "address_lines": [
        "1400 E 38th 1/2 St.",
        ""
      ],
      "locality": "Austin",
      "region": "TX",
      "postal_code": "78702",
      "location": {
        "latitude": 30.2935421,
        "longitude": -97.716
      },
      "congressional_district": null,
      "state_leg_district": null,
      "state_senate_district": null
    },
    "event_type": "CANVASS",
    "created_date": 1515719207,
    "modified_date": 1537280503,
    "browser_url": "https://events.mobilizeamerica.io/julieoliver4congress/event/26/",
    "high_priority": null,
    "contact": null
  },
  {
    "id": 28,
    "description": "Join us for a phonebank party to make calls to Texas voters, identify Julie supporters, and get out the vote for the March 6th primary! \n\nPlease bring your laptop, headphones, and cell phone.",
    "timezone": "America/Chicago",
    "title": "Election Eve Phonebank for Julie!",
    "summary": "",
    "featured_image_url": "https://mobilize-uploads-prod.s3.amazonaws.com/uploads/event/DSOqLpPUMAIiLOu_20180112023653687503.jpg",
    "sponsor": {
      "id": 152,
      "name": "Julie Oliver for Congress",
      "slug": "julieoliver4congress",
      "is_coordinated": true,
      "is_independent": false,
      "is_primary_campaign": false,
      "state": "TX",
      "district": "25",
      "candidate_name": "Julie Oliver",
      "race_type": "CONGRESSIONAL",
      "event_feed_url": "https://events.mobilizeamerica.io/julieoliver4congress/",
      "created_date": 1515604602,
      "modified_date": 1534532489
    },
    "timeslots": [
      {
        "id": 200,
        "start_date": 1516294800,
        "end_date": 1516314600
      },
      {
        "id": 201,
        "start_date": 1516314600,
        "end_date": 1516330800
      },
    ],
    "location": {
      "venue": "Campaign HQ",
      "address_lines": [
        "1204 1/2 S Congress",
        "Austin"
      ],
      "locality": "TX",
      "region": "TX",
      "postal_code": "78704",
      "location": {
        "latitude": null,
        "longitude": null
      },
      "congressional_district": null,
      "state_leg_district": null,
      "state_senate_district": null
    },
    "event_type": "PHONE_BANK",
    "created_date": 1515730115,
    "modified_date": 1537281338,
    "browser_url": "https://events.mobilizeamerica.io/julieoliver4congress/event/28/",
    "high_priority": null,
    "contact": null
  }
];

const defaultProps = {
  getEvents: () => {},
  updateZip: () => {},
  events,
  error: null,
};

it("renders an event list", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListView {...defaultProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders an event", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Event event={events[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
