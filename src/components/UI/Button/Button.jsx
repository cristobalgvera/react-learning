import React from "react";
import PropTypes from "prop-types";

import styles, { Button as ButtonClass } from "./Button.module.scss";

const Button = ({ type, clicked, children }) => (
  <button className={[ButtonClass, styles[type]].join(" ")} onClick={clicked}>
    {children}
  </button>
);

const { string, func } = PropTypes;
Button.propTypes = {
  type: string,
  clicked: func,
};

export default Button;
