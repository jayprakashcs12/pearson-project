import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Components/Dashboard";
import User from "./Components/User";
import FavouriteMovieList from "./Components/FavouriteMovieList";

function App() {
  var name = localStorage.getItem('UserName')
  return (
    <React.Fragment>
      {name? <Router>
        <Route exact path="/" ><Dashboard /></Route>
        <Route exact path="/dashboard" ><Dashboard /></Route>
        <Route exact path="/user/:id" ><User /></Route>
        <Route exact path="/favorites" ><FavouriteMovieList /></Route>
        </Router> : 
        <Router>
          <Login /> 
        </Router>
      }
    </React.Fragment>
  );
}

export default App;