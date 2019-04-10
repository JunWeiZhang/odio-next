import React from "react";

/* Components */
import Player from "@containers/Player/Player";

import "./SideBarRight.scss";

const SideBarRight = () => {
  return (
    <div className="sidebar-right-container">
      <Player />
    </div>
  );
};

export default SideBarRight;
