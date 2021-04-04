import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './style/global';
import { TransitionContextProvider } from './context/TransitionContext';

const App: FC = () => (
  <TransitionContextProvider>
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  </TransitionContextProvider>
);

export default App;
