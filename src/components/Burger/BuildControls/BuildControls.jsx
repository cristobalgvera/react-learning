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

const BuildControls = ({ price, purchasable, summarize }) => (
  <div className={BuildControlsClass}>
    <p>
      Price: <strong>${price}</strong>
    </p>
    {controls.map(({ ingredient, label }) => (
      <BuildControl key={label} label={label} ingredient={ingredient} />
    ))}
    <button
      disabled={!purchasable}
      className={OrderButton}
      onClick={() => summarize()}
    >
      ORDER NOW
    </button>
  </div>
);

const { number, bool, func } = PropTypes;
BuildControls.propTypes = {
  price: number.isRequired,
  purchasable: bool.isRequired,
  summarize: func.isRequired,
};

export default BuildControls;
