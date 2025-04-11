import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const Store = createContext();

function ContextProvider({ children }) {
 

  return (
    <Store.Provider value={{  }}>
      {children}
    </Store.Provider>
  );
}

export default ContextProvider;
