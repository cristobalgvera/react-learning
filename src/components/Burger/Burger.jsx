import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Burger as BurgerStyle } from "./Burger.module.scss";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ reduxState: { ingredients } }) => {
  let ingredientsTags = Object.keys(ingredients)
    .map((ingredient) =>
      [...Array(+ingredients[ingredient])].map((_, i) => (
        <BurgerIngredient
          key={`${ingredient}_${i}`}
          ingredient={capitalize(ingredient)}
        />
      ))
    )
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
  reduxState: shape({
    ingredients: shape({
      salad: number,
      bacon: number,
      cheese: number,
      meat: number,
    }).isRequired,
  }).isRequired,
};

const capitalize = (phrase) => {
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
};

const mapStateToProps = ({ ingredients }) => ({
  reduxState: { ingredients: ingredients },
});

export default connect(mapStateToProps, () => ({}))(Burger);
