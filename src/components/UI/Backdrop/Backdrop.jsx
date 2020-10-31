import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Backdrop as BackdropClass } from "./Backdrop.module.scss";
import BurgerBuilderContext from "../../../context/BurgerBuilderContext/BurgerBuilderContext";

const Backdrop = ({ show }) => {
  const { closeModal } = useContext(BurgerBuilderContext);
  return (
    show && <div className={BackdropClass} onClick={() => closeModal()}></div>
  );
};

const { bool } = PropTypes;
Backdrop.propTypes = {
  show: bool.isRequired,
};

export default Backdrop;
