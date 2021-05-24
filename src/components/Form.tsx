import React, { useState } from "react";
import {Button, Card, Form} from 'react-bootstrap';

// GENERICS IN TYPESCRIPT ...
// useEffect,useState
// Form Component => Function based component
const FormComponent = (props:any) => {
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
    <Card className="mb-3" style={{color:'blue'}}>
      <Card.Body>
        <Card.Title>
          Todo App
        </Card.Title>
        <Card.Text>
Create your todo list by adding items below:
        </Card.Text>
      </Card.Body>
      <Form.Group onSubmit={Submit}>
        <Form.Control type="text" onChange={handleChange} className="form-control form-control-sm custom"/>
        <br />
        <Button type="submit" className="btn btn-info"> Add</Button>
      </Form.Group>
    </Card>
  );
};

export default FormComponent;
