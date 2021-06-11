import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import Header from "./components/Header";
import CreateArticle from "./pages/CreateArticle";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create">
            <CreateArticle />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/article/1">
            <SingleArticle />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
