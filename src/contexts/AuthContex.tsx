import React, { useEffect, useState } from "react";
import { fireAuth } from "../firebaseConfig";

export const AuthContext = React.createContext<any>("");

const AuthContextProvider: React.FC<{ children: JSX.Element[] | JSX.Element }> =
  ({ children }) => {
    const [currentUser, setCurrentUser] = useState<any>("");

    function logout() {
      return fireAuth.signOut();
    }

    useEffect(() => {
      const unsubscribe = fireAuth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      });

      return unsubscribe;
    }, []);

    const value = {
      currentUser,
      logout,
    };

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  };

export default AuthContextProvider;
