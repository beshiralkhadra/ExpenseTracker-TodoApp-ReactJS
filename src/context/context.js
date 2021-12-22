import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  budget: 3000,
  expenses: [
    { id: 12, name: "shopping", cost: 200 },
    { id: 14, name: "holiday", cost: 60 },
    { id: 15, name: "maintainance", cost: 90 },
  ],
  submitted: false,
  logged: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
