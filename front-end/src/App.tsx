import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './style/global';
import { TransitionContextProvider } from './context/TransitionContext';

const App: FC = () => (
  <TransitionContextProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </TransitionContextProvider>
);

export default App;
