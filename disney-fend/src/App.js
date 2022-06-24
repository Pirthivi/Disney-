import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route exact path="/home" element={<Home />} />

          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
