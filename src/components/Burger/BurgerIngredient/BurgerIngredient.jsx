import React from "react";
import PropTypes from "prop-types";

import styles, { Seeds1, Seeds2 } from "./BurgerIngredient.module.scss";

const BurgerIngredient = ({ ingredient }) => (
  <div className={styles[ingredient]}>
    {ingredient === "BreadTop" && (
      <>
        <div className={Seeds1}></div>
        <div className={Seeds2}></div>
      </>
    )}
  </div>
);

const { string } = PropTypes;
BurgerIngredient.propTypes = {
  ingredient: string.isRequired,
};

export default BurgerIngredient;
