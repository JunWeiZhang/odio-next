import React from "react";

/* Components */
import MenuGroup from "./MenuGroup/MenuGroup";
import MeniItem from "./MenuItem/MenuItem";

import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu-container">
      <MeniItem label="Home" path="/" />
      <MeniItem label="Favorites" path="/favorites" />
      <MeniItem label="Countries" path="/countries" />

      <MenuGroup label="Radio Stations">
        <MeniItem label="test" />
        <MeniItem label="test" />
        <MeniItem label="test" />
      </MenuGroup>
    </div>
  );
};

export default Menu;
