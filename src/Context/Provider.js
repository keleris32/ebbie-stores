import React, { createContext, useReducer } from 'react';

import apparelInitialState from './initialState/apparelInitialState';
import apparelReducer from './reducer/apparelReducer';

// Initialize context api
export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  // Apparel tabs state
  const [apparelState, apparelDispatch] = useReducer(
    apparelInitialState,
    apparelReducer
  );

  return (
    <GlobalContext.Provider value={{ apparelState, apparelDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
