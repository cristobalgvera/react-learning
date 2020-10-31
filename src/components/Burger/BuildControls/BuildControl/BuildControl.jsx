import React, { useContext } from "react";
import PropTypes from "prop-types";

import BurgerBuilderContext from "../../../../context/BurgerBuilderContext/BurgerBuilderContext";

import {
  BuildControl as BuildControlClass,
  Less,
  More,
  Label,
} from "./BuildControl.module.scss";

const BuildControl = ({ label, ingredient }) => {
  const { addIngredient, removeIngredient, disabledInfo } = useContext(
    BurgerBuilderContext
  );
  return (
    <div className={BuildControlClass}>
      <div className={Label}>{label}</div>
      <button
        className={Less}
        disabled={disabledInfo[ingredient]}
        onClick={() => removeIngredient(ingredient)}
      >
        Less
      </button>
      <button className={More} onClick={() => addIngredient(ingredient)}>
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

export default BuildControl;
