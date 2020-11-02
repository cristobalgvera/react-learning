import React from "react";
import PropTypes from "prop-types";

import { CheckoutSummary as CheckoutSummaryStyle } from "./CheckoutSummary.module.scss";

import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";

const CheckoutSummary = ({ ingredients, cancelled, continued }) => (
  <div className={CheckoutSummaryStyle}>
    <h1>Whe hope it taste well!</h1>
    <div style={{ width: "100%", margin: "auto" }}>
      <Burger ingredients={ingredients} />
      <Button type="Danger" clicked={cancelled}>
        CANCEL
      </Button>
      <Button type="Success" clicked={continued}>
        CONTINUE
      </Button>
    </div>
  </div>
);

const { func, number, shape } = PropTypes;
CheckoutSummary.propTypes = {
  ingredients: shape({
    salad: number,
    bacon: number,
    cheese: number,
    meat: number,
  }).isRequired,
  continued: func.isRequired,
  cancelled: func.isRequired,
};

export default CheckoutSummary;
