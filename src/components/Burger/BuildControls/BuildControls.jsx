import React from "react";
import { connect } from "react-redux";

import {
  BuildControls as BuildControlsClass,
  OrderButton,
} from "./BuildControls.module.scss";

import BuildControl from "./BuildControl/BuildControl";
import { PRICE_ACTIONS } from "../../../store/actions/priceActions";

const { CALCULATE } = PRICE_ACTIONS;

const BuildControls = ({
  purchasable,
  summarize,
  reduxState: { ingredients, price },
  reduxActions: { updatePrice },
}) => {
  const updatePriceHandler = (ingredient, amount) => {
    updatePrice({
      ...ingredients,
      [ingredient]: ingredients[ingredient] + amount,
    });
  };

  return (
    <div className={BuildControlsClass}>
      <p>
        Price: <strong>${price}</strong>
      </p>
      {Object.keys(ingredients).map((ingredient) => (
        <BuildControl
          key={ingredient}
          label={ingredient}
          ingredient={ingredient}
          updatePrice={updatePriceHandler}
        />
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
};

const mapStateToProps = ({
  ingredients: { ingredients },
  price: { price },
}) => ({
  reduxState: { ingredients: ingredients, price: price },
});

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    updatePrice: (ingredients) =>
      dispatch({ type: CALCULATE, payload: { ingredients: ingredients } }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
