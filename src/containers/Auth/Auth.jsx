import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Form/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Auth as AuthStyle } from './Auth.module.scss';
import { initAuthentication } from '../../store/actions/index';

const initialCredential = {
    email: '',
    password: '',
};

const Auth = ( { reduxActions: { onInitAuthentication } } ) => {
    const [credential, setCredential] = useState(initialCredential);
    const [isSignUp, setIsSignUp] = useState(false);
    const { email, password } = credential;

    const validateEmail = ( email ) => {
        const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(email.toLowerCase());
    };

    const handleChange = ( property, value ) => {
        setCredential(prevState => ({ ...prevState, [property]: value }));
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        if (validateEmail(email))
            onInitAuthentication(credential, isSignUp);
        else console.log('Invalid credentials');
    };

    const switchAuthModeHandler = () => {
        setIsSignUp(prevState => !prevState);
    };

    return (
        <div className={AuthStyle}>
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
                <Button type={'Success'} clicked={handleSubmit}>
                    SUBMIT
                </Button>
            </form>
            <Button type={'Danger'} clicked={switchAuthModeHandler}>
                SWITCH TO SIGN {isSignUp ? 'UP' : 'IN'}
            </Button>
        </div>
    );
};

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        onInitAuthentication: ( credential, isSignUp ) => dispatch(initAuthentication(credential, isSignUp)),
    },
});

export default connect(null, mapDispatchToProps)(Auth);