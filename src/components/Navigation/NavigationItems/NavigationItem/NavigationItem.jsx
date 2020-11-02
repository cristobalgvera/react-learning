import React from "react";
import PropTypes from "prop-types";

import {
  NavigationItem as NavigationItemStyle,
  active,
} from "./NavigationItem.module.scss";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ link, children }) => (
  <li className={NavigationItemStyle}>
    <NavLink to={`${link}`} activeClassName={active}>
      {children}
    </NavLink>
  </li>
);

const { string } = PropTypes;
NavigationItem.propTypes = {
  link: string.isRequired,
};

export default NavigationItem;
