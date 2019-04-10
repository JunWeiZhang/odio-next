import React from "react";
import PropTypes from "prop-types";

import "./MenuItem.scss";

function MenuItem(props) {
  const link = () => {
    window.goToRoute(props.path);
  };

  return (
    <div className="menu-item" onClick={link}>
      {props.label}
    </div>
  );
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default MenuItem;
