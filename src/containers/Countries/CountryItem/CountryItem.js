import React from "react";
import PropTypes from "prop-types";

import "./CountryItem.scss";

const CountryItem = props => {
  return (
    <div
      className={`country-item`}
      onClick={() => props.onClick(props.name.toLowerCase())}
    >
      <span className={`flag flag-icon-${props.iso.toLowerCase()}`} />
      {props.name}
    </div>
  );
};

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  iso: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

CountryItem.defaultProps = {
  iso: ""
};

export default CountryItem;
