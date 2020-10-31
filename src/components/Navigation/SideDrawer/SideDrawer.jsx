import React from "react";
import PropTypes from "prop-types";

import Logo from "../../Logo/Logo";

import {
  SideDrawer as SideDrawerStyle,
  Open,
  Close,
  Logo as LogoStyle,
} from "./SideDrawer.module.scss";

import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = ({ show }) => {
  const activeStyles = [SideDrawerStyle, show ? Open : Close].join(" ");
  return (
    <>
      <Backdrop show={show} />
      <div className={activeStyles}>
        <div className={LogoStyle}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

const { bool } = PropTypes;
SideDrawer.propTypes = {
  show: bool.isRequired,
};

export default SideDrawer;
