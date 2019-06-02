import React from "react";
import { connect } from "react-redux";

/* Components */
// import Background from "./Background/Background";
import Station from "./Station/Station";
import Controls from "./Controls/Controls";

import "./Player.scss";

const SideBarRight = props => {
  return (
    <div className="player-container">
      <Station />
      <Controls />
    </div>
  );
};

const mapStateToProps = state => ({
  colors: state.player.colors
});

export default connect(mapStateToProps)(SideBarRight);
