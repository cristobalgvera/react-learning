import React, { useState } from "react";

import { Content } from "./Layout.module.scss";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import WillBeClickedContext from "../../context/WillBeClickedContext/WillBeClickedContext";

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerToggleHanlder = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <WillBeClickedContext.Provider
        value={{ clicked: sideDrawerToggleHanlder }}
      >
        <Toolbar />
        <SideDrawer show={showSideDrawer} />
      </WillBeClickedContext.Provider>
      <main className={Content}>{children}</main>
    </>
  );
};

export default Layout;
