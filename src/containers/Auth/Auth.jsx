import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Form/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Auth as AuthStyle } from './Auth.module.scss';
import { initAuthentication, handleAuthenticationLogout } from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

const initialCredential = {
    email: '',
    password: '',
};

const Auth = (
    {
        reduxState: { error, loading, localId },
        reduxActions: { onInitAuthentication },
    },
) => {
    const [credential, setCredential] = useState(initialCredential);
    const [isSignUp, setIsSignUp] = useState(true);
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
            <Redirect to={'/burger-builder'}/>
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
        error,
        loading,
        localId,
    },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        onInitAuthentication: ( credential, isSignUp ) => dispatch(initAuthentication(credential, isSignUp)),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);