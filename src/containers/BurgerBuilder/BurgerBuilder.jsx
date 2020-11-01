import React, { useEffect, useState } from "react";
import axios from "../../services/axios-orders";

import Burger from "../../components/Burger/Burger";

import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import BurgerBuilderContext from "../../context/BurgerBuilderContext/BurgerBuilderContext";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import WillBeClickedContext from "../../context/WillBeClickedContext/WillBeClickedContext";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 1000,
  bacon: 1500,
  cheese: 750,
  meat: 2000,
};

const BurgerBuilder = () => {
  const [price, setPrice] = useState(0);
  const [disabledButtonsInfo, setDisabledButtonsInfo] = useState({});
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState();
  const [error, setError] = useState(false);

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

    setPrice(() => {
      return ingredients
        ? Object.keys(ingredients).reduce(
            (accumulator, current) =>
              accumulator + ingredients[current] * INGREDIENT_PRICES[current],
            2000
          )
        : 2000;
    });
  }, [ingredients]);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const response = await axios.get("/ingredients.json");
        return await response.data;
      } catch (error) {
        setError(true);
      }
    };

    getIngredients()
      .then((ingredients) => setIngredients(ingredients))
      .catch(({ message }) => console.log(message));
  }, []);

  const addIngredientHandler = (ingredient) => {
    setIngredients(({ ...prevState }) => ({
      ...prevState,
      [ingredient]: ++prevState[ingredient],
    }));
  };

  const removeIngredientHandler = (ingredient) => {
    if (ingredients[ingredient] <= 0) {
      return;
    }
    setIngredients(({ ...prevState }) => ({
      ...prevState,
      [ingredient]: --prevState[ingredient],
    }));
  };

  const showPurchaseModal = () => {
    setPurchasing(true);
  };

  const closePurchaseModal = () => {
    setPurchasing(false);
  };

  const purchaseHandler = () => {
    // alert("You purchase a tasty burger!");
    const data = {
      ingredients: ingredients,
      price: price,
      customer: {
        name: "Cristóbal Gajardo",
        address: {
          street: "Los Ganaderos 03761",
          zipCode: "4780000",
          country: "Chile",
        },
        email: "example@test.com",
      },
      deliveryMethod: "PedidosYa",
    };
    axios
      .post("/orders.json", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(() => {
        closePurchaseModal();
        setLoading(false);
      });

    setLoading(true);
  };

  const orderSummaryHelper = () =>
    loading ? (
      <Spinner />
    ) : (
      <OrderSummary
        ingredients={ingredients || {}}
        price={price}
        close={closePurchaseModal}
        purchase={purchaseHandler}
      />
    );

  const burgerHelper = () =>
    ingredients ? (
      <>
        <Burger ingredients={ingredients} />
        <BurgerBuilderContext.Provider
          value={{
            addIngredient: addIngredientHandler,
            removeIngredient: removeIngredientHandler,
            disabledInfo: disabledButtonsInfo,
          }}
        >
          <BuildControls
            purchasable={purchasable}
            price={price}
            summarize={showPurchaseModal}
          />
        </BurgerBuilderContext.Provider>
      </>
    ) : error ? (
      <p>Ingredients can't be loaded :/</p>
    ) : (
      <Spinner />
    );

  return (
    <>
      <WillBeClickedContext.Provider value={{ clicked: closePurchaseModal }}>
        <Modal show={purchasing}>{orderSummaryHelper()}</Modal>
      </WillBeClickedContext.Provider>
      {burgerHelper()}
    </>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
