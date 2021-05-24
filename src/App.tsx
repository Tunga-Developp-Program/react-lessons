import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/App.css';


function App() {
  const [todos, setTodos] = useState(["Go for Eid"])
  return (
    <div className="App container">
      <section>
        <Form />
        <TodoList mytodos={todos} />
      </section>

    </div>
  );
}

export default App;


//NOTE: use auto-import vscode...