import React, { useContext } from "react";
import "./assets/css/App.css";
import AddForm from "./components/AddForm";
import ListNames from "./components/ListNames";

function App() {
  return (
    <div className="App">
      <h1>Context api</h1>

      <ListNames  />
      <AddForm />
    </div>
  );
}

export default App;
