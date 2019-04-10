import React from "react";
import PropTypes from "prop-types";

import "./CountryItem.scss";

const CountryItem = props => {
  return (
    <div
      className={`country-item`}
      onClick={() => props.onClick(props.name.toLowerCase())}
    >
      <span className={`flag flag-icon-${props.iso}`} />
      {props.name}
    </div>
  );
};

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  iso: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CountryItem;
