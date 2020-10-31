import React from "react";

import {
  Toolbar as ToolbarStyle,
  Logo as LogoStyle,
  DesktopOnly,
} from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = () => (
  <header className={ToolbarStyle}>
    <DrawerToggle />
    <div className={LogoStyle}>
      <Logo />
    </div>
    <nav className={DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
