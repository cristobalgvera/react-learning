import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import { checkAuthState } from './store/actions/index';

const App = ( { reduxState: { authenticated }, reduxActions: { onCheckAuthState } } ) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onCheckAuthState();
        setLoading(false);
    }, [onCheckAuthState]);

    const isAuthenticated = () => (
        <>
            <Route path="/burger-builder/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders} exact/>
        </>
    );

    return (
        <BrowserRouter>
            {!loading &&
            <Layout>
                <Switch>
                    <Route path="/burger-builder" component={BurgerBuilder} exact/>
                    {authenticated && isAuthenticated()}
                    <Route path="/sign-in" component={Auth}/>
                    <Redirect to="/burger-builder"/>
                </Switch>
            </Layout>
            }
        </BrowserRouter>
    );
};

const mapStateToProps = ( { authReducer: { idToken } } ) => ({
    reduxState: {
        authenticated: idToken != null,
    },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        onCheckAuthState: () => dispatch(checkAuthState()),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
