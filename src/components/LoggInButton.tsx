import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoggInButton = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const submit =(e:any)=>{
e.preventDefault()
// Do some api post request ,

// when successfull , set the loggedIn state to true

setLoggedIn(true)
}


  return (
    <div>
      <form onSubmit={submit}>
        Login to application
        <input type="text" placeholder="token" />
        <input type="submit" value="submit" />
      </form>
      
    </div>
  );
};

export default LoggInButton;
