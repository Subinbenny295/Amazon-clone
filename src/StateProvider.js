import React, { createContext, useContext, useReducer } from 'react';
// We need to track the basket

//set up data layer
export const StateContext = createContext();

//Bulid a Provider
export const StateProvider = ({ reducer, initialState, children })  => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}  
    </StateContext.Provider>
);

// To use it inside a container
export const useStateValue = () => useContext(StateContext);