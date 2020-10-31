import React, { memo } from "react";
import PropTypes from "prop-types";

import { Modal as ModalClass } from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ show, children }) => (
  <>
    <Backdrop show={show} />
    <div
      className={ModalClass}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      {children}
    </div>
  </>
);

const { bool } = PropTypes;
Modal.propTypes = {
  show: bool.isRequired,
};

export default memo(Modal, ({ show: prev }, { show: next }) => !(prev || next));
