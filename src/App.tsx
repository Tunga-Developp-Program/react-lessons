import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./assets/css/App.css";
import About from "./components/About";
import FunApp from "./components/FunApp";
import LoginPage from "./components/LoginPage";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
          <Route path="/" exact>
            <h1>home page</h1>
          </Route>
          <Route path="/about/login">
            <LoginPage />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="*">
            <h2> Page not found</h2>
          </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
