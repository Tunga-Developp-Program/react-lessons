import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/App.css';


function App() {
  const [todos, setTodos] = useState(["Go for choir practice", "Go to the salon", "Shop for groceries", "Prepare dinner"])
  
  return (
    <div className="App container">
      <section>
        <h1 className = "text-secondary bg-danger display-3 pb-3">My Todos</h1>
        
        <Form /> 
        <TodoList mytodos={todos} />
      </section>

    </div>
  );
}

export default App;


//NOTE: use auto-import vscode...
