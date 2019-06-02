import React from "react";

/* Components */
import Player from "@containers/Player/Player";

import "./BottomBar.scss";

const BottomBar = () => {
  return (
    <div className="bottom-bar-container">
      <Player />
    </div>
  );
};

export default BottomBar;
