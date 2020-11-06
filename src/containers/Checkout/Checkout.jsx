import React, { useState } from "react";
import {
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

const Checkout = () => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [price, setPrice] = useState();

  const cancelledChekoutHandler = () => {
    history.goBack();
  };

  const continuedCheckoutHandler = () => {
    if (location.state && location.state.price)
      history.replace(`${url}/contact-data`);
    else if (window.confirm("Add some ingredients!"))
      history.push("/burger-builder");
  };

  return (
    <>
      <CheckoutSummary
        cancelled={cancelledChekoutHandler}
        continued={continuedCheckoutHandler}
      />
      <Route
        path={`${url}/contact-data`}
        render={() => <ContactData price={price} />}
      />
    </>
  );
};

export default Checkout;
