import React, { Component } from "react";

import "./Loader.scss";

class Loader extends Component {
  render() {
    return <div className="loader-container">Loader</div>;
  }
}

Loader.defaultProps = {
  label: ""
};

export default Loader;
