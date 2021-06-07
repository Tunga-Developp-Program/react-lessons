import React, { useContext } from "react";
import "./assets/css/App.css";
import AddForm from "./components/AddForm";
import ListNames from "./components/ListNames";
import LoggInButton from "./components/LoggInButton";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <h1>Context api</h1>

      <ListNames age="100" />
<LoggInButton/>
<Logout/>
      {/* <AddForm /> */}
    </div>
  );
}

export default App;
