import React from 'react';

import styles from './Backdrop.module.css';

const Backdrop = ( { show } ) => (
    <div className={`${styles.Backdrop} ${show ? styles.BackdropOpen : styles.BackdropClosed}`}/>
);

export default Backdrop;