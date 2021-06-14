import React, { useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Redirect } from "react-router";
import { AuthContext } from "../contexts/AuthContex";
import { fireAuth, uiConfig } from "../firebaseConfig";

const Login = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div className="card login p-5">
      <h1 className="card-title center mb-3"> Sign In</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fireAuth} />
    </div>
  );
};

export default Login;
