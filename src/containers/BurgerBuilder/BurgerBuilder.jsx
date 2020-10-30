import React, { useState } from "react";

import Burger from "../../components/Burger/Burger";

import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 1000,
  bacon: 1500,
  cheese: 750,
  meat: 2000,
};

const BurgerBuilder = () => {
  const [price, setPrice] = useState(2500);
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const addIngredientHandler = (ingredient) => {
    setIngredients(({ ...prevState }) => ({
      ...prevState,
      [ingredient]: prevState[ingredient]++,
    }));
    setPrice((prevState) => prevState + INGREDIENT_PRICES[ingredient]);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls addIngredient={addIngredientHandler} />
    </>
  );
};

export default BurgerBuilder;
