import React, { Component } from "react";
import { connect } from "react-redux";
import { ipcRenderer } from "electron";

/* Actions */
import * as PlayerActions from "@redux/reducers/player/actions";

class Colors extends Component {
  componentDidMount() {
    ipcRenderer.on("set-vibrant-colors", (event, colors) => {
      console.log("colors: ", colors);

      if (!colors) return;

      this.props.dispatch(
        PlayerActions.setPlayerColors({
          ...colors
        })
      );
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.station.favicon !== this.props.station.favicon) {
      ipcRenderer.send("get-vibrant-colors", nextProps.station.favicon);
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  station: state.player.station
});

export default connect(mapStateToProps)(Colors);
