import React, { useState } from "react";

// GENERICS IN TYPESCRIPT ...
// useEffect,useState
// Form Component => Function based component
const Form = (props:any) => {
  // useState
  const [todo, setTodo] = useState("");
 

  const Submit = (event: any) => {
    event.preventDefault();
  
    props.setTodos([...props.mytodos,todo])
  };

  const handleChange = (event: any) => {
    setTodo(event.target.value);
    
  };
  return (
    <form onSubmit={Submit}>
      <input placeholder="enter item to add to list" type="text" onChange={handleChange} className="form-control form-control-sm custom border border-danger" />
      <button type="submit" className = "mt-2 btn btn-outline-secondary"> Add</button>
    </form>
  );
};

export default Form;
