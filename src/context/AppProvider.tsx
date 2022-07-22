import React, { createContext, useReducer } from "react";
import { initState, reducer } from "./reducer";

const defaultValue = {
  state: initState,
  dispatch: () => initState,
};

export const AppContext = createContext<any>(defaultValue);

export const AppProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
