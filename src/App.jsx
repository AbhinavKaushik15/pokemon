import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MyState from "./context/data/MyState";

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </MyState>
  );
};

export default App;
