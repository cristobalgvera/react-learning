import React from "react";
import PropTypes from "prop-types";

import { InputStyle } from "./Input.module.scss";

const Input = ({ type, name, placeholder, value, change }) => (
  <input
    type={type}
    className={InputStyle}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={({ target: { value, name: property } }) =>
      change(property, value)
    }
  />
);

const { string, number, bool, func } = PropTypes;
Input.propTypes = {
  type: string,
  name: string,
  placeholder: string,
  value: string || number || bool,
  change: func,
};

export default Input;
