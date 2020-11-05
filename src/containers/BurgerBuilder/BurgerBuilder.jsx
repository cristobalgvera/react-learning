import React, { useEffect, useState } from "react";
import axios from "../../services/axios-orders";
import { connect } from "react-redux";
import qs from "querystring";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import BurgerBuilderContext from "../../context/BurgerBuilderContext/BurgerBuilderContext";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import WillBeClickedContext from "../../context/WillBeClickedContext/WillBeClickedContext";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useHistory } from "react-router-dom";

const INGREDIENT_PRICES = {
  salad: 1000,
  bacon: 1500,
  cheese: 750,
  meat: 2000,
};

const BurgerBuilder = ({ reduxState: { ingredients } }) => {
  const history = useHistory();

  const [disabledButtonsInfo, setDisabledButtonsInfo] = useState({});

  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [price, setPrice] = useState(0);

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

  const showPurchaseModal = () => {
    setPurchasing(true);
  };

  const closePurchaseModal = () => {
    setPurchasing(false);
  };

  const purchaseHandler = () => {
    history.push({
      pathname: "/checkout",
      search: qs.stringify(ingredients),
      state: {
        price: price,
      },
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
        <Burger />
        <BurgerBuilderContext.Provider
          value={{
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

const mapStateToProps = ({ ingredients }) => ({
  reduxState: { ingredients: ingredients },
});

export default connect(mapStateToProps, () => ({}))(
  withErrorHandler(BurgerBuilder, axios)
);
