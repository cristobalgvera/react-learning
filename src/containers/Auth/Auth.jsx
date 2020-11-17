import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Form/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Auth as AuthStyle } from './Auth.module.scss';
import { initAuthentication, authenticationLogout } from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const initialCredential = {
    email: '',
    password: '',
};

const Auth = (
    {
        reduxState: { error, loading, localId },
        reduxActions: { onInitAuthentication, onLogout },
    },
) => {
    const [credential, setCredential] = useState(initialCredential);
    const [isSignUp, setIsSignUp] = useState(false);
    const { email, password } = credential;

    const handleChange = ( property, value ) => {
        setCredential(prevState => ({ ...prevState, [property]: value }));
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        onInitAuthentication(credential, isSignUp);
    };

    const switchAuthModeHandler = () => {
        setIsSignUp(prevState => !prevState);
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to leave?'))
            onLogout();
    };

    const form = () => (
        !localId ? (
            <>
                <form>
                    <Input
                        type={'email'}
                        name={'email'}
                        placeholder={'Email'}
                        value={email}
                        change={handleChange}
                    />
                    <Input
                        type={'password'}
                        name={'password'}
                        placeholder={'**********'}
                        value={password}
                        change={handleChange}
                    />
                    {error && <p>{error.message}</p>}
                    <Button type={'Success'} clicked={handleSubmit}>
                        SUBMIT
                    </Button>
                </form>
                <Button type={'Danger'} clicked={switchAuthModeHandler}>
                    SWITCH TO SIGN {isSignUp ? 'UP' : 'IN'}
                </Button>
            </>
        ) : (
            <Button type={'Danger'} clicked={handleLogout}>
                LOGOUT
            </Button>
        )
    );

    return (
        <div className={AuthStyle}>
            {loading ? <Spinner/> : form()}
        </div>
    );
};

const mapStateToProps = ( { authReducer: { error, loading, localId } } ) => ({
    reduxState: {
        error: error,
        loading: loading,
        localId: localId,
    },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        onInitAuthentication: ( credential, isSignUp ) => dispatch(initAuthentication(credential, isSignUp)),
        onLogout: () => dispatch(authenticationLogout()),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);