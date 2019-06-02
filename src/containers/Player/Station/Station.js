import React, { Component } from "react";
import { connect } from "react-redux";

/* Components */
import Img from "@components/Img/Img";

import "./Station.scss";

class Station extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player-station">
        <Img className="image" src={this.props.station.favicon} />
        <span className={`flag flag-icon-${this.props.station.iso}`} />

        <div className="name">{this.props.station.name}</div>

        <div className="song">Something something</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  station: state.player.station,
  colors: state.player.colors
});

export default connect(mapStateToProps)(Station);
