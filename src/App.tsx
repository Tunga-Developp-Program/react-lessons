import React, { useEffect, useState } from "react";
import "./assets/css/App.css";

// interface for initial state 
interface Data {
  title: "";
  completed: "";
}

function App() {
  const [data, setData] = useState<Data>({
    title: "",
    completed: "",
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      
        <p>{data.title}</p>
   
      </header>
    </div>
  );
}

export default App;
