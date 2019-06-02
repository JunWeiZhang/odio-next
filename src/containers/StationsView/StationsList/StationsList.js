import React, { Component } from "react";

/* Components */
import Station from "../Station/Station";

import "./StationsList.scss";

class StationsList extends Component {
  render() {
    const stations = this.props.stations.filter(
      (station, index, self) =>
        index === self.findIndex(s => s.url === station.url)
    );

    console.log("x: ", stations);

    return (
      <div className="stations-list-container">
        {(stations || []).map((station, i) => (
          <Station
            key={`${station.name}${i}`}
            {...this.props}
            station={station}
          />
        ))}
      </div>
    );
  }
}

export default StationsList;
