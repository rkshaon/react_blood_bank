import React, { useState, useContext, useEffect } from 'react';
import admins from './data';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // console.log(admins);
  return(
    <AppContext.Provider
      value={{
        admins,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
