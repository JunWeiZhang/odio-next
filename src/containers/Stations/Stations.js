import React from "react";
import PropTypes from "prop-types";

/* Components */
import StationsItem from "./StationItem/StationItem";

import "./Stations.scss";

function Stations(props) {
  const renderStations = () => {
    return props.stations.map((station, i) => (
      <StationsItem key={`${station.name}-${i}`} station={station} />
    ));
  };

  return <div className="stations-view-container">{renderStations()}</div>;
}

Stations.propTypes = {
  stations: PropTypes.array
};

Stations.defaultProps = {
  stations: []
};

export default Stations;
