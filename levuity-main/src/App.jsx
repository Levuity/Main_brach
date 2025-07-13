// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Mockdata from "./components/Mockdata";

function App() {
  return (
     <Router>
      <div className="font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mockdata" element={<Mockdata />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
