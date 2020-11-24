import React, { useContext } from 'react';

import Card from '../../components/UI/Card/Card';
import styles from './Auth.module.scss';
import { AuthContext } from '../../context/auth-context';

const Auth = () => {
    const { handleLogin } = useContext(AuthContext);

    return (
        <div className={styles.auth}>
            <Card>
                <h2>You are not authenticated!</h2>
                <p>Please log in to continue.</p>
                <button onClick={handleLogin}>Log In</button>
            </Card>
        </div>
    );
};

export default Auth;
