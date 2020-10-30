import React from "react";
import PropTypes from "prop-types";

import { BuildControls as BuildControlsClass } from "./BuildControls.module.scss";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", ingredient: "salad" },
  { label: "Bacon", ingredient: "bacon" },
  { label: "Cheese", ingredient: "cheese" },
  { label: "Meat", ingredient: "meat" },
];

const BuildControls = ({ addIngredient }) => (
  <div className={BuildControlsClass}>
    {controls.map(({ ingredient, label }) => (
      <BuildControl key={label} label={label} />
    ))}
  </div>
);

const { func } = PropTypes;
BuildControls.propTypes = {
  addIngredient: func.isRequired,
};

export default BuildControls;
