import React, { Component } from "react";

/* Components */
import Controls from "./Controls/Controls";

class Player extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <Controls />
      </div>
    );
  }
}

export default Player;
