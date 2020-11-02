import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/burger-builder" component={BurgerBuilder} exact />
        <Redirect to="/burger-builder" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
