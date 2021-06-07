import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <button onClick={() => setLoggedIn(false)}>Logout to application</button>
    </div>
  );
};

export default Logout;
