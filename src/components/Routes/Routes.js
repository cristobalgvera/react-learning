import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from '../../containers/User/User';
import { HOME, PIZZA } from './paths';
import Pizza from '../../containers/Pizza/Pizza';
// import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

// This is not working, i don't know why
// const asyncPizza = asyncComponent(() => import('../../containers/Pizza/Pizza'));

const Routes = () => (
    <Switch>
        <Route path={PIZZA} component={Pizza}/>
        <Route path={HOME} component={User} exact/>
    </Switch>
);

export default Routes;
