import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
import {
    BURGER_BUILDER,
    CHECKOUT,
    ORDERS,
    SIGN_IN,
} from './path/path';

const asyncCheckout = asyncComponent(() => import('../../containers/Checkout/Checkout'));
const asyncAuth = asyncComponent(() => import('../../containers/Auth/Auth'));
const asyncOrders = asyncComponent(() => import('../../containers/Orders/Orders'));

const Routes = ( { reduxState: { authenticated } } ) => {

    const isAuthenticated = () => (
            <Switch>
                <Route path={BURGER_BUILDER} component={BurgerBuilder} exact/>
                <Route path={CHECKOUT} component={asyncCheckout}/>;
                <Route path={ORDERS} component={asyncOrders} exact/>;
                <Redirect to={BURGER_BUILDER}/>
            </Switch>
        )
    ;

    const notAuthenticated = () => (
        <Switch>
            <Route path={BURGER_BUILDER} component={BurgerBuilder} exact/>
            <Route path={SIGN_IN} component={asyncAuth}/>
            <Redirect to={BURGER_BUILDER}/>
        </Switch>
    );
    return authenticated ? isAuthenticated() : notAuthenticated();

};

const mapStateToProps = ( { authReducer: { idToken } } ) => ({
    reduxState: {
        authenticated: idToken != null,
    },
});


export default connect(mapStateToProps)(Routes);