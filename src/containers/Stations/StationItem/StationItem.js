import React from "react";
import PropTypes from "prop-types";

const StationItem = props => {
  return <div className="station-item">{props.name}</div>;
};

StationItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default StationItem;
