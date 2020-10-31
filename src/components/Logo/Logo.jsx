import React from "react";

import { Logo as LogoStyle } from "./Logo.module.scss";
import BurgerLogo from "../../assets/images/burger-logo.png";

const Logo = ({ height }) => (
  <div className={LogoStyle}>
    <img src={BurgerLogo} alt="Burger"></img>
  </div>
);

export default Logo;
