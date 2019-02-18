import React from 'react';
import {Switch, Route} from "react-router-dom";

import Layout from './hoc/layout';
import Home from './components/Home/home';
import BookView from "./components/Book";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/books/:id' component={BookView}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
