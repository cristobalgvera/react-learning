import React, { useContext } from "react";

import { DrawerToggle as DrawerToggleStyle } from "./DrawerToggle.module.scss";

import WillBeClickedContext from "../../../../context/WillBeClickedContext/WillBeClickedContext";

const DrawerToggle = () => {
  const { clicked } = useContext(WillBeClickedContext);
  return (
    <div className={DrawerToggleStyle} onClick={() => clicked()}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
