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
import {fireDb,fireAuth} from "./firebaseConfig"
import PrivateRoute from "./components/PrivateRoute";
function App() {
{
// const docRef = fireDb.collection("articles").doc("7thna6Pra6zS71DLtRwt");
// // Firebase ===> collection ===> document .. use .get() ==> data
// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

}


  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <PrivateRoute path="/create" >
            <CreateArticle/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute  path="/profile">
            <Profile />
          </PrivateRoute>
          <Route  path="/article/:id">
            <SingleArticle />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
