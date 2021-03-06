import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './container/Orders/Orders';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={ BurgerBuilder } />
        <Route path='/checkout' component={ Checkout } />
        <Route path='/orders' component={ Orders } />
      </Switch>
    </Layout>
  );
}

export default App;
