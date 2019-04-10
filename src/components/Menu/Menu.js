import React from "react";

/* Components */
import MeniItem from "./MenuItem/MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <MeniItem label="Home" path="/" />
      <MeniItem label="Favorites" path="/favorites" />
      <MeniItem label="Countries" path="/countries" />
      <MeniItem label="Radio Stations">
        <>
          <MeniItem label="test" />
          <MeniItem label="test" />
          <MeniItem label="test" />
        </>
      </MeniItem>
    </div>
  );
};

export default Menu;
