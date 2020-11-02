import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";

const useQuery = (key) => new URLSearchParams(useLocation().search).get(key);

const useQueryAll = () => {
  let _entries = {};
  const entries = new URLSearchParams(useLocation().search).entries();
  for (let entry of entries)
    _entries = {
      ..._entries,
      [entry[0]]: isNaN(+entry[1]) ? entry[1] : +entry[1],
    };

  return _entries;
};

const Checkout = () => {
  const history = useHistory();
  const ingredients = useQueryAll();

  const cancelledChekoutHandler = () => {
    history.goBack();
  };

  const continuedCheckoutHandler = () => {
    alert("continued");
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        cancelled={cancelledChekoutHandler}
        continued={continuedCheckoutHandler}
      />
    </div>
  );
};

export default Checkout;
