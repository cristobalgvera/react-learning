import React, { useEffect, useState } from "react";
import axios from "../../services/axios-orders";
import { connect } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import BurgerBuilderContext from "../../context/BurgerBuilderContext/BurgerBuilderContext";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import WillBeClickedContext from "../../context/WillBeClickedContext/WillBeClickedContext";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useHistory } from "react-router-dom";

const BurgerBuilder = ({ reduxState: { ingredients } }) => {
  const history = useHistory();
  const [disabledButtonsInfo, setDisabledButtonsInfo] = useState({});
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const showPurchaseModal = () => {
    setPurchasing(true);
  };

  const closePurchaseModal = () => {
    setPurchasing(false);
  };

  const purchaseHandler = () => {
    history.push("/checkout");
    setLoading(true);
  };

  const orderSummaryHelper = () =>
    loading ? (
      <Spinner />
    ) : (
      <OrderSummary close={closePurchaseModal} purchase={purchaseHandler} />
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
            summarize={showPurchaseModal}
          />
        </BurgerBuilderContext.Provider>
      </>
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

const mapStateToProps = ({ ingredients: { ingredients } }) => ({
  reduxState: { ingredients: ingredients },
});

export default connect(mapStateToProps)(withErrorHandler(BurgerBuilder, axios));
