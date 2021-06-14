import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContex";

const PrivateRoute  = (props:any) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...props.rest}
      render={() => {
        return currentUser ? (
         props.children
        ) : (
          <Redirect to="/login" />
        );
      }}></Route>
  );
};
export default PrivateRoute;
