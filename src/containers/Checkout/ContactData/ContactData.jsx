import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "../../../services/axios-orders";
import Button from "../../../components/UI/Button/Button";

import {
  ContactData as ContactDataStyle,
  Input,
} from "./ContactData.module.scss";
import { useHistory } from "react-router-dom";
import Spinner from "../../../components/UI/Spinner/Spinner";

const initialContactData = {
  name: "Default name",
  email: "default@email.com",
  address: {
    street: "Default street",
    postalCode: "0000000",
  },
};

const ContactData = ({ ingredients, price }) => {
  const history = useHistory();
  const [contactData, setContactData] = useState({ ...initialContactData });
  const [loading, setLoading] = useState(false);

  const handleFormChange = (property, value) => {
    setContactData(({ ...prevState }) => ({ ...prevState, [property]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      ingredients: ingredients,
      price: price,
      customer: contactData,
      deliveryMethod: "PedidosYa",
    };
    console.log(data);

    axios
      .post("/orders.json", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(() => {
        if (window.confirm("Order ready!")) {
          setLoading(false);
          history.push("/burger-builder");
        }
      });
  };

  const {
    name,
    email,
    address: { street, postalCode },
  } = contactData;
  const formHelper = () =>
    loading ? (
      <Spinner />
    ) : (
      <form>
        <input
          type="text"
          className={Input}
          name="name"
          placeholder="Name"
          value={name}
        />
        <input
          type="email"
          className={Input}
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          type="text"
          className={Input}
          name="street"
          placeholder="Street"
          value={street}
        />
        <input
          type="text"
          className={Input}
          name="postalCode"
          placeholder="Postal code"
          value={postalCode}
        />
        <Button type="Success" clicked={handleFormSubmit}>
          ORDER
        </Button>
      </form>
    );

  return (
    <div className={ContactDataStyle}>
      <h4>Enter your contact data</h4>
      {formHelper()}
    </div>
  );
};

const { number, shape } = PropTypes;
ContactData.propTypes = {
  ingredients: shape({
    salad: number,
    bacon: number,
    cheese: number,
    meat: number,
  }).isRequired,
  price: number.isRequired,
};

export default ContactData;
