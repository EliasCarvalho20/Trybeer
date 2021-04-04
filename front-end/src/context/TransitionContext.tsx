import React, { FC, createContext, useState } from 'react';

import { ContextProps } from './interface';

export const TransitionContext = createContext<Partial<ContextProps>>({});

export const TransitionContextProvider: FC = ({ children }) => {
  const [preset, setPreset] = useState('fadeLeftFadeRight');

  return (
    <TransitionContext.Provider value={ { preset, setPreset } }>
      {children}
    </TransitionContext.Provider>
  );
};
