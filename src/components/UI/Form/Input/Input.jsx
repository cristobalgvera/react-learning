import React from "react";
import PropTypes from "prop-types";

import { Input as InputStyle } from "./Input.module.scss";

const Input = ({ type, name, placeholder, value, change }) => (
  <div className={InputStyle}>
    <label htmlFor={name}>{name}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={({ target: { value, name: property } }) =>
        change(property, value)
      }
    />
  </div>
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
