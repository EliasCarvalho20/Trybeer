import React, { FC, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

import { TransitionContext } from '../context/TransitionContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';

const Routes: FC = () => {
  const { preset } = useContext(TransitionContext);

  return (
    <>
      <Route
        render={ ({ location }) => (
          <PageTransition
            preset={ preset }
            transitionKey={ location.pathname }
          >
            <Switch location={ location }>
              <Route exact path="/login" component={ Login } />
              <Route exact path="/register" component={ Register } />
              <Route exact path="/products" component={ Products } />
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </PageTransition>
        ) }
      />
    </>
  );
};

export default Routes;
