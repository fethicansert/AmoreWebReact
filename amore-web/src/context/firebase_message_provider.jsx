import React, { createContext } from "react";
import { initializeApp } from "firebase/app";

export const FirebaseMessageContext = createContext();

const FirebaseMessageProvider = ({ children }) => {
  return (
    <FirebaseMessageContext.Provider>
      {children}
    </FirebaseMessageContext.Provider>
  );
};

export default FirebaseMessageProvider;
