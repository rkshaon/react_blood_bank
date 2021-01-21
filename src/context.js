import React, { useState, useContext, useEffect } from 'react';
import admins from './data';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({email: "", password: ""});

  const Login = (details) => {
    for (var i = 0; i < admins.length; i++) {
      if (admins[i].email === details.email && admins[i].password === details.password) {
        console.log('logged in');
        setUser({email: details.email, password: details.password});
        break;
      } else {
        console.log('details do not matched');
      }
    }
  }

  const Logout = () => {
    console.log('log out');
    setUser({email: "", password: ""});
  }
  
  return(
    <AppContext.Provider
      value={{
        user,
        Login,
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
