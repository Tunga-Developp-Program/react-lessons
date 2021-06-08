import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const ListNames = (props: any) => {
  // useContext allows us to have access to the context
  const { names } = useContext(ThemeContext);
  const { loggedIn } = useContext(AuthContext);

console.log(loggedIn);

  return (
    <div>

      {loggedIn ? (
        <h1 className="log">logged In</h1>
      ) : (
        <h1 className="not-log">Not logged In</h1>
      )}

      {names.map((name: any, index: number) => (
        <p key={index}>
          {name}: {props.age}
        </p>
      ))}
    </div>
  );
};

export default ListNames;
