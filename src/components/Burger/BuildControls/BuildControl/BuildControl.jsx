import React from "react";
import PropTypes from "prop-types";

import {
  BuildControl as BuildControlClass,
  Less,
  More,
  Label,
} from "./BuildControl.module.scss";

const BuildControl = ({ label }) => (
  <div className={BuildControlClass}>
    <div className={Label}>{label}</div>
    <button className={Less}>Less</button>
    <button className={More}>More</button>
  </div>
);

const { string } = PropTypes;
BuildControl.propTypes = {
  label: string,
};

export default BuildControl;
