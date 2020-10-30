import React from "react";
import PropTypes from "prop-types";

import { Burger as BurgerStyle } from "./Burger.module.scss";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  let ingredientsTags = Object.keys(ingredients)
    .map((ingredient) => {
      return [...Array(ingredients[ingredient])].map((_, i) => (
        <BurgerIngredient
          key={`${ingredient}_${i}`}
          ingredient={capitalize(ingredient)}
        />
      ));
    })
    .reduce((previous, current) => previous.concat(current), []);

  if (ingredientsTags.length === 0)
    ingredientsTags = <p>Please add ingredients!</p>;

  return (
    <div className={BurgerStyle}>
      <BurgerIngredient ingredient={"BreadTop"} />
      {ingredientsTags}
      <BurgerIngredient ingredient={"BreadBottom"} />
    </div>
  );
};

const { number, shape } = PropTypes;
Burger.propTypes = {
  ingredients: shape({
    salad: number,
    bacon: number,
    cheese: number,
    meat: number,
  }).isRequired,
};

const capitalize = (phrase) => {
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
};

export default Burger;
