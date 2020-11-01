import React from "react";
import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";

const OrderSummary = ({ purchase, close, ingredients, price }) => {
  const summary = Object.keys(ingredients).map((ingredient) => (
    <li key={ingredient}>
      <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:{" "}
      {ingredients[ingredient]}
    </li>
  ));

  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{summary}</ul>
      <p>
        <strong>TOTAL: ${price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button type={"Danger"} clicked={close}>
        CANCEL
      </Button>
      <Button type={"Success"} clicked={() => purchase()}>
        CONTINUE
      </Button>
    </>
  );
};

const { func, shape, number } = PropTypes;
OrderSummary.propTypes = {
  close: func.isRequired,
  ingredients: shape({
    salad: number,
    bacon: number,
    cheese: number,
    meat: number,
  }).isRequired,
  price: number.isRequired,
  purchase: func.isRequired,
};

export default OrderSummary;
