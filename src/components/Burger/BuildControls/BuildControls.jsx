import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  BuildControls as BuildControlsClass,
  OrderButton,
} from "./BuildControls.module.scss";

import BuildControl from "./BuildControl/BuildControl";

const BuildControls = ({
  price,
  purchasable,
  summarize,
  reduxState: { ingredients },
}) => {
  return (
    <div className={BuildControlsClass}>
      <p>
        Price: <strong>${price}</strong>
      </p>
      {Object.keys(ingredients).map((ingredient) => (
        <BuildControl
          key={ingredient}
          label={ingredient}
          ingredient={ingredient}
        />
      ))}
      <button
        disabled={!purchasable}
        className={OrderButton}
        onClick={() => summarize()}
      >
        ORDER NOW
      </button>
    </div>
  );
};

const { number, bool, func } = PropTypes;
BuildControls.propTypes = {
  price: number.isRequired,
  purchasable: bool.isRequired,
  summarize: func.isRequired,
};

const mapStateToProps = ({ ingredients }) => ({
  reduxState: { ingredients: ingredients },
});

export default connect(mapStateToProps, () => ({}))(BuildControls);
