import React from "react";
import PropTypes from "prop-types";

import { Order as OrderStyle } from "./Order.module.scss";

const Order = ({
  customer: { email, name },
  deliveryMethod,
  price,
  ingredients,
}) => {
  const ingredientsList = () => {
    let list = [];
    for (let ingredient in ingredients)
      list.push(
        <span key={ingredient}>
          {ingredient} ({ingredients[ingredient]})
        </span>
      );
    return list;
  };

  return (
    <div className={OrderStyle}>
      <p>Customer name: {name}</p>
      <p>Customer email: {email}</p>
      <p>Ingredients:</p>
      {ingredientsList()}
      <p>
        Price: <strong>${price} CLP</strong>
      </p>
      <p>
        Delivery method: <strong>{deliveryMethod}</strong>
      </p>
    </div>
  );
};

const { number, string, shape } = PropTypes;
Order.propTypes = {
  customer: shape({
    name: string,
    email: string,
    address: shape({
      street: string,
      postalCode: string,
    }),
  }).isRequired,
  deliveryMethod: string,
  ingredients: shape({
    bacon: number,
    cheese: number,
    meat: number,
    salad: number,
  }).isRequired,
  price: number.isRequired,
};

export default Order;
