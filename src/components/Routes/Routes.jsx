import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => import('../../containers/Checkout/Checkout'));
const asyncOrders = asyncComponent(() => import('../../containers/Orders/Orders'));
const Routes = ( { reduxState: { authenticated } } ) => {
    const isAuthenticated = () => (
            <Switch>
                <Route path="/burger-builder" component={BurgerBuilder} exact/>
                <Route path="/burger-builder/checkout" component={asyncCheckout}/>;
                <Route path="/orders" component={asyncOrders} exact/>;
                <Redirect to="/burger-builder"/>
            </Switch>
        )
    ;

    const notAuthenticated = () => (
        <Switch>
            <Route path="/burger-builder" component={BurgerBuilder} exact/>
            <Route path="/sign-in" component={asyncAuth}/>
            <Redirect to="/burger-builder"/>
        </Switch>
    );

    return authenticated ? isAuthenticated() : notAuthenticated();
};

const asyncAuth = asyncComponent(() => import('../../containers/Auth/Auth'));

const mapStateToProps = ( { authReducer: { idToken } } ) => ({
    reduxState: {
        authenticated: idToken != null,
    },
});


export default connect(mapStateToProps)(Routes);