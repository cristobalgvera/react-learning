import React from 'react';
import styles from './User.module.scss';

const User = ( { age, name } ) => {
    return (
        <div className={styles.User}>
            <h1>{name}</h1>
            <p>Age: {age}</p>
        </div>
    );
};

export default User;