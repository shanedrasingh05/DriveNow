import { createContext, useContext } from "react";
import axios from 'axios';
import {toast} from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const value = {

    }

  return(
      <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
    useContext(AppContext);
} 