import React from "react";
import PropTypes from "prop-types";

import {
  NavigationItem as NavigationItemStyle,
  active as activeStyle,
} from "./NavigationItem.module.scss";

const NavigationItem = ({ link, active, children }) => (
  <li className={NavigationItemStyle}>
    <a href={link} className={active && activeStyle}>
      {children}
    </a>
  </li>
);

const { string, bool } = PropTypes;
NavigationItem.propTypes = {
  link: string.isRequired,
  active: bool,
};

export default NavigationItem;
