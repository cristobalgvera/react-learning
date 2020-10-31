import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Backdrop as BackdropClass } from "./Backdrop.module.scss";
import WillBeClickedContext from "../../../context/WillBeClickedContext/WillBeClickedContext";

const Backdrop = ({ show }) => {
  const { clicked } = useContext(WillBeClickedContext);
  return (
    show && <div className={BackdropClass} onClick={() => clicked()}></div>
  );
};

const { bool } = PropTypes;
Backdrop.propTypes = {
  show: bool.isRequired,
};

export default Backdrop;
