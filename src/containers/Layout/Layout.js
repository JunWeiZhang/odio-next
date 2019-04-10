import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

/* Components */
import SideBarLeft from "@containers/SideBarLeft/SideBarLeft";
import SideBarRight from "@containers/SideBarRight/SideBarRight";

import "@style/index.scss";
import "./Layout.scss";

class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentDidMount() {
    window.goToRoute = route => {
      window.scrollTo(0, 0);
      this.props.history.push(route);
    };
  }

  render() {
    return (
      <div className="layout-container">
        <SideBarRight />
        <div className="page-container">{this.props.children}</div>
        <SideBarLeft />
      </div>
    );
  }
}

export default withRouter(Layout);
