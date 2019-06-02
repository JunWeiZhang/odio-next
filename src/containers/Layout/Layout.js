import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

/* Components */
import TopBar from "@containers/TopBar/TopBar";
import SideBarLeft from "@containers/SideBarLeft/SideBarLeft";
import SideBarRight from "@containers/SideBarRight/SideBarRight";
import BottomBar from "@containers/BottomBar/BottomBar";
import AudioManager from "@containers/AudioManager/AudioManager";
import Colors from "@containers/Colors/Colors";

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
        <AudioManager />
        <Colors />
        <SideBarRight />
        <div id="odio-content" className="page-container">
          {this.props.children}
          <TopBar />
        </div>
        <SideBarLeft />
        <BottomBar />
      </div>
    );
  }
}

export default withRouter(Layout);
