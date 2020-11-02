import React from "react";

import { NavigationItems as NavigationItemsStyle } from "./NavigationItems.module.scss";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={NavigationItemsStyle}>
    <NavigationItem link="/burger-builder">Burger Builder</NavigationItem>
    <NavigationItem link="/checkout">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
