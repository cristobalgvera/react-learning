import React from "react";

import { Content } from "./Layout.module.scss";

const Layout = ({ children }) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={Content}>{children}</main>
  </>
);

export default Layout;
