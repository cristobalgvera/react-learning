import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/burger-builder/checkout" component={Checkout}/>
                <Route path="/burger-builder" component={BurgerBuilder}/>
                <Route path="/sign-in" component={Auth}/>
                <Route path="/orders" component={Orders} exact/>
                <Redirect to="/burger-builder"/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
