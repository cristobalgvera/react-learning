import React, { memo } from 'react';

import styles from './ErrorModal.module.scss';

const ErrorModal = memo(( { children, onClose } ) => (
    <React.Fragment>
        <div className={styles.backdrop} onClick={onClose}/>
        <div className={styles.errorModal}>
            <h2>An Error Occurred!</h2>
            <p>{children}</p>
            <div className={styles.errorModal__actions}>
                <button type="button" onClick={onClose}>
                    Okay
                </button>
            </div>
        </div>
    </React.Fragment>
));

export default ErrorModal;
