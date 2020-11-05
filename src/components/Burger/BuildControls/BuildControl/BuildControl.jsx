import React, { useContext } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BurgerBuilderContext from "../../../../context/BurgerBuilderContext/BurgerBuilderContext";
import { INGREDIENTS_ACTIONS } from "../../../../store/actions";

import {
  BuildControl as BuildControlClass,
  Less,
  More,
  Label,
} from "./BuildControl.module.scss";

const { ADD, REMOVE } = INGREDIENTS_ACTIONS;

const BuildControl = ({
  label,
  ingredient,
  reduxActions: { onRemoveIngredient, onAddIngredient },
}) => {
  const { disabledInfo } = useContext(BurgerBuilderContext);

  return (
    <div className={BuildControlClass}>
      <div className={Label}>{label}</div>
      <button
        className={Less}
        disabled={disabledInfo[ingredient]}
        onClick={() => onRemoveIngredient(ingredient)}
      >
        Less
      </button>
      <button className={More} onClick={() => onAddIngredient(ingredient)}>
        More
      </button>
    </div>
  );
};

const { string } = PropTypes;
BuildControl.propTypes = {
  label: string.isRequired,
  ingredient: string.isRequired,
};

const mapDispatcToProps = (dispatch) => ({
  reduxActions: {
    onAddIngredient: (ingredient) =>
      dispatch({ type: ADD, payload: { ingredient: ingredient } }),
    onRemoveIngredient: (ingredient) =>
      dispatch({ type: REMOVE, payload: { ingredient: ingredient } }),
  },
});

export default connect(() => ({}), mapDispatcToProps)(BuildControl);
