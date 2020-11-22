import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from '../../containers/User/User';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const asyncPizza = () => asyncComponent(() => import('../../containers/Pizza/Pizza'));

const Routes = () => {
    return (
        <Switch>
            <Route path={'/pizza'} component={asyncPizza}/>
            <Route path={'/'} component={User} exact/>
        </Switch>
    );
};

export default Routes;
