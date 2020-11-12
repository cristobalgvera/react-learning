import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "../../../services/axios-orders";
import Button from "../../../components/UI/Button/Button";

import { ContactData as ContactDataStyle } from "./ContactData.module.scss";
import { useHistory } from "react-router-dom";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Form/Input/Input";
import { resetPrice, resetIngredients } from "../../../store/actions/index";

const initialContactData = {
  name: "",
  email: "",
  address: {
    street: "",
    postalCode: "",
  },
};

const ContactData = ({
  reduxState: { ingredients, price },
  reduxActions: { onCheckout },
}) => {
  const history = useHistory();
  const [contactData, setContactData] = useState({ ...initialContactData });
  const [loading, setLoading] = useState(false);

  const handleFormChange = (property, value) => {
    let updatedContactData = { ...contactData };

    if (!Object.keys(updatedContactData).includes(property)) {
      updatedContactData = { ...updatedContactData["address"] };
      setContactData(({ ...prevState }) => ({
        ...prevState,
        address: { ...prevState["address"], [property]: value },
      }));
      return;
    }

    setContactData(({ ...prevState }) => ({ ...prevState, [property]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      ingredients: ingredients,
      price: price,
      customer: contactData,
    };
    console.log(data);

    axios
      .post("/orders.json", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(() => {
        if (window.confirm("Order ready!")) {
          setLoading(false);
          onCheckout();
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
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          change={handleFormChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          change={handleFormChange}
        />
        <Input
          type="text"
          name="street"
          placeholder="Street"
          value={street}
          change={handleFormChange}
        />
        <Input
          type="text"
          name="postalCode"
          placeholder="Postal code"
          value={postalCode}
          change={handleFormChange}
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
  reduxState: shape({
    ingredients: shape({
      salad: number,
      bacon: number,
      cheese: number,
      meat: number,
    }).isRequired,
    price: number.isRequired,
  }).isRequired,
};

const mapStateToProps = ({
  ingredients: { ingredients },
  price: { price },
}) => ({
  reduxState: { ingredients: ingredients, price: price },
});

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    onCheckout: () => {
      dispatch(resetIngredients());
      dispatch(resetPrice());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
