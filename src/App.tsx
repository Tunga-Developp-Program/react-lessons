import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/App.css';


function App() {
  const [todos, setTodos] = useState(["Go for Eid"])
  return (
    <div className="App">
      <div className='row justify-content-center'>
        <section className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
          <h1>Todo App</h1>
          <Form mytodos={todos} setTodos={setTodos} />
          <TodoList mytodos={todos} setTodos={setTodos} />
        </section>
      </div>


    </div>
  );
}

export default App;


//NOTE: use auto-import vscode...
