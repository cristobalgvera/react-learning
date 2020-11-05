import React, { useEffect, useState } from "react";
import axios from "../../services/axios-orders";

import Order from "../../components/Order/Order";

const Orders = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get("/orders.json");
        return data;
      } catch ({ message }) {
        console.log(message);
      }
    };

    getOrders()
      .then((orders) => {
        const _orders = [];
        for (let order in orders) _orders.push({ ...orders[order], id: order });
        setOrders(_orders);
      })
      .catch(({ message }) => console.log(message));
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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Orders</h1>
      {orders && ordersList()}
    </div>
  );
};

export default Orders;
