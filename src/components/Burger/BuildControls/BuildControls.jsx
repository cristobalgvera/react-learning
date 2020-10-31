import React from "react";
import PropTypes from "prop-types";

import {
  BuildControls as BuildControlsClass,
  OrderButton,
} from "./BuildControls.module.scss";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", ingredient: "salad" },
  { label: "Bacon", ingredient: "bacon" },
  { label: "Cheese", ingredient: "cheese" },
  { label: "Meat", ingredient: "meat" },
];

const BuildControls = ({ price, purchasable }) => (
  <div className={BuildControlsClass}>
    <p>
      Price: <strong>${price}</strong>
    </p>
    {controls.map(({ ingredient, label }) => (
      <BuildControl key={label} label={label} ingredient={ingredient} />
    ))}
    <button disabled={!purchasable} className={OrderButton}>
      ORDER NOW
    </button>
  </div>
);

const { number, bool } = PropTypes;
BuildControls.propTypes = {
  price: number.isRequired,
  purchasable: bool.isRequired,
};

export default BuildControls;
