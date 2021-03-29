import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes: FC = () => (
  <Switch>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Register } />
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
  </Switch>
);

export default Routes;
