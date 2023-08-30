import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PathRoutes from "./helpers/Routes.helpers";
import Home from "./componets/Home/Home";
import NavBarC from "./componets/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBarC />
      <Routes>
        <Route path={PathRoutes.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
