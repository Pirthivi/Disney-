import React from "react";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login.js"
import Header from "./components/Header.js"
import Home from "./components/Home.js";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      
      <Switch>

        

        <Route exact path="/">
        <Login />
       </Route>
       <Route path="/home">
         <Home />
       </Route> 
       <Route path="/detail/:id">
         <Detail />
       </Route> 
              </Switch>
      </Router>

      
    </div>
  );
}

export default App;
