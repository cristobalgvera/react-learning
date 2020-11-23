import React, { useContext } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BurgerBuilderContext from "../../../../context/BurgerBuilderContext/BurgerBuilderContext";
import { INGREDIENTS_ACTIONS } from "../../../../store/actions/actionTypes";
import {
  addIngredient,
  removeIngredient,
} from "../../../../store/actions/index";

import {
  BuildControl as BuildControlClass,
  Less,
  More,
  Label,
} from "./BuildControl.module.scss";

const { INGREDIENT_ADD, INGREDIENT_REMOVE } = INGREDIENTS_ACTIONS;

const BuildControl = ({
  label,
  ingredient,
  updatePrice,
  reduxActions: { onRemoveIngredient, onAddIngredient },
}) => {
  const { disabledInfo } = useContext(BurgerBuilderContext);

  const onClickHandler = (type) => {
    switch (type) {
      case INGREDIENT_ADD:
        onAddIngredient(ingredient);
        updatePrice(ingredient, 1);
        break;
      case INGREDIENT_REMOVE:
        onRemoveIngredient(ingredient);
        updatePrice(ingredient, -1);
        break;
      default:
        return;
    }
  };

  return (
    <div className={BuildControlClass}>
      <div className={Label}>{label}</div>
      <button
        className={Less}
        disabled={disabledInfo[ingredient]}
        onClick={() => onClickHandler(INGREDIENT_REMOVE)}
      >
        Less
      </button>
      <button className={More} onClick={() => onClickHandler(INGREDIENT_ADD)}>
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
    onAddIngredient: (ingredient) => dispatch(addIngredient(ingredient)),
    onRemoveIngredient: (ingredient) => dispatch(removeIngredient(ingredient)),
  },
});

export default connect(null, mapDispatcToProps)(BuildControl);
