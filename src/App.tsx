import React from "react";
import "./assets/css/App.css";

import About from "./components/About"
import Home from "./components/Home"
import Projects from "./components/Projects"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
