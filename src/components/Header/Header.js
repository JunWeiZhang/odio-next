import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";

const Header = props => {
  return (
    <div className="header-generic container">
      <div className="title">{props.title}</div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
