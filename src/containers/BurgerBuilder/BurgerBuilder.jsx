import React, { useEffect, useState } from "react";

import Burger from "../../components/Burger/Burger";

import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import BurgerBuilderContext from "../../context/BurgerBuilderContext/BurgerBuilderContext";

const INGREDIENT_PRICES = {
  salad: 1000,
  bacon: 1500,
  cheese: 750,
  meat: 2000,
};

const BurgerBuilder = () => {
  const [price, setPrice] = useState(2500);
  const [disabledButtonsInfo, setDisabledButtonsInfo] = useState({});
  const [purchasable, setPurchasable] = useState(false);
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  useEffect(() => {
    setDisabledButtonsInfo(() => {
      const _ingredients = { ...ingredients };
      for (let ingredient in ingredients)
        _ingredients[ingredient] = _ingredients[ingredient] <= 0;
      return _ingredients;
    });

    setPurchasable(() => {
      const addedIngredients = Object.values({ ...ingredients }).reduce(
        (totalIngredients, ingredientAmount) =>
          (totalIngredients += ingredientAmount),
        0
      );
      return addedIngredients > 0;
    });
  }, [ingredients]);

  const addIngredientHandler = (ingredient) => {
    setIngredients(({ ...prevState }) => ({
      ...prevState,
      [ingredient]: ++prevState[ingredient],
    }));
    setPrice((prevState) => prevState + INGREDIENT_PRICES[ingredient]);
  };

  const removeIngredientHandler = (ingredient) => {
    if (ingredients[ingredient] <= 0) {
      return;
    }
    setIngredients(({ ...prevState }) => ({
      ...prevState,
      [ingredient]: --prevState[ingredient],
    }));
    setPrice((prevState) => prevState - INGREDIENT_PRICES[ingredient]);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <BurgerBuilderContext.Provider
        value={{
          addIngredient: addIngredientHandler,
          removeIngredient: removeIngredientHandler,
          disabledInfo: disabledButtonsInfo,
        }}
      >
        <BuildControls purchasable={purchasable} price={price} />
      </BurgerBuilderContext.Provider>
    </>
  );
};

export default BurgerBuilder;
