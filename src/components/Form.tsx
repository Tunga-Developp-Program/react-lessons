import React, { useState } from "react";
import { Button } from 'react-bootstrap';

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
      <input type="text" onChange={handleChange} className="form-control form-control-sm custom" />
      <Button variant="primary" size="lg" block type="submit">
        Add task
      </Button>
    </form>
  );
};

export default Form;
