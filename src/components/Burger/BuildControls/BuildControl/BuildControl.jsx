import React, { useContext } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BurgerBuilderContext from "../../../../context/BurgerBuilderContext/BurgerBuilderContext";
import { INGREDIENTS_ACTIONS } from "../../../../store/actions/ingredientsActions";

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
  updatePrice,
  reduxActions: { onRemoveIngredient, onAddIngredient },
}) => {
  const { disabledInfo } = useContext(BurgerBuilderContext);

  const onClickHandler = (type) => {
    switch (type) {
      case ADD:
        onAddIngredient(ingredient);
        updatePrice(ingredient, 1);
        break;
      case REMOVE:
        onRemoveIngredient(ingredient);
        updatePrice(ingredient, -1);
        break;
      default:
        break;
    }
  };

  return (
    <div className={BuildControlClass}>
      <div className={Label}>{label}</div>
      <button
        className={Less}
        disabled={disabledInfo[ingredient]}
        onClick={() => onClickHandler(REMOVE)}
      >
        Less
      </button>
      <button className={More} onClick={() => onClickHandler(ADD)}>
        More
      </button>
    </div>
  );
};

const { string, func } = PropTypes;
BuildControl.propTypes = {
  updatePrice: func.isRequired,
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
