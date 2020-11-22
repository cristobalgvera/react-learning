import React from 'react';

import styles from './Modal.module.css';
import { CSSTransition } from 'react-transition-group';

const animationTiming = {
    enter: 300,
    exit: 600,
};

const Modal = ( { show, closed } ) => (
    <CSSTransition
        in={show}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames={{
            enterActive: styles.ModalOpen,
            exitActive: styles.ModalClosed,
        }}
    >
        <div className={styles.Modal}>
            <h1>A Modal</h1>
            <button className="Button" onClick={closed}>Dismiss</button>
        </div>

    </CSSTransition>
);

export default Modal;