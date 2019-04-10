import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";

const Header = props => {
  return <div className="header-generic">{props.title}</div>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
