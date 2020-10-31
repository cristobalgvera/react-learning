import React, { useContext } from "react";
import PropTypes from "prop-types";

import BurgerBuilderContext from "../../../context/BurgerBuilderContext/BurgerBuilderContext";
import Button from "../../UI/Button/Button";

const OrderSummary = ({ ingredients, price }) => {
  const { closeModal } = useContext(BurgerBuilderContext);

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
      <Button type={"Danger"} clicked={closeModal}>
        CANCEL
      </Button>
      <Button
        type={"Success"}
        clicked={() => {
          alert("You purchase the burger, tasty!");
        }}
      >
        CONTINUE
      </Button>
    </>
  );
};

const { shape, number } = PropTypes;
OrderSummary.propTypes = {
  ingredients: shape({
    salad: number,
    bacon: number,
    cheese: number,
    meat: number,
  }).isRequired,
  price: number.isRequired,
};

export default OrderSummary;
