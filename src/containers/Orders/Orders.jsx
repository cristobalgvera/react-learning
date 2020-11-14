import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initOrders } from "../../store/actions/index";

import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = ({
  reduxState: { orders, error },
  reduxActions: { onInitOrders },
}) => {
  useEffect(() => {
    onInitOrders();
  }, []);

  const ordersList = () =>
    orders.map((order) => {
      const { customer, ingredients, price, deliveryMethod, id } = order;
      return (
        <Order
          key={id}
          customer={customer}
          deliveryMethod={deliveryMethod}
          price={price}
          ingredients={ingredients}
        />
      );
    });

  const ordersHelper = () =>
    !orders ? (
      error ? (
        <p>There was an error fetching orders :/</p>
      ) : (
        <Spinner />
      )
    ) : (
      <div>
        <h1 style={{ textAlign: "center" }}>Orders</h1>
        {orders && ordersList()}
      </div>
    );

  return ordersHelper();
};

const mapStateToProps = ({ ordersReducer: { orders, error } }) => ({
  reduxState: { orders: orders, error: error },
});

const mapDispatchToProps = (dispatch) => ({
  reduxActions: { onInitOrders: () => dispatch(initOrders()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
