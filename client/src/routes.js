import React from 'react';
import {Switch, Route} from "react-router-dom";

import Layout from './hoc/layout';
import Home from './components/Home/home';
import BookView from "./components/Book";
import Login from './containers/Admin/login';
import Auth from './hoc/auth';
import User from './components/Admin';
import AddReview from './components/Admin/add';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Auth(Home,null)}/>
        <Route path='/user' exact component={Auth(User,true)}/>
        <Route path='/login' exact component={Auth(Login,false)}/>
        <Route path='/user/add' exact component={Auth(AddReview,true)}/>
        <Route path='/books/:id' exact component={Auth(BookView,null)}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
