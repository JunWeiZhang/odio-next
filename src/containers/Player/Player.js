import React, { Component } from "react";

/* Components */
import AudioManager from "./AudioManager/AudioManager";
import Controls from "./Controls/Controls";

class Player extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <AudioManager />
        <Controls />
      </div>
    );
  }
}

export default Player;
