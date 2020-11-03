import React, { useEffect, useState } from "react";
import {
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import ContactData from "./ContactData/ContactData";

const Checkout = () => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    let _entries = {};
    const entries = new URLSearchParams(location.search).entries();
    for (let entry of entries)
      _entries = {
        ..._entries,
        [entry[0]]: isNaN(+entry[1]) ? entry[1] : +entry[1],
      };
    setIngredients(_entries);
    if (location.state && location.state.price) setPrice(location.state.price);
  }, []);

  const cancelledChekoutHandler = () => {
    history.goBack();
  };

  const continuedCheckoutHandler = () => {
    if (location.state && location.state.price)
      history.replace(`${url}/contact-data`);
    else if (window.confirm("Add some ingredients!"))
      history.push("/burger-builder");
  };

  const checkoutHelper = () =>
    ingredients ? (
      <>
        <CheckoutSummary
          ingredients={ingredients}
          cancelled={cancelledChekoutHandler}
          continued={continuedCheckoutHandler}
        />
        <Route
          path={`${url}/contact-data`}
          render={() => <ContactData ingredients={ingredients} price={price} />}
        />
      </>
    ) : (
      <Spinner />
    );

  return checkoutHelper();
};

export default Checkout;
