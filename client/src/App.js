import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./views/Auth";
import EditPost from "./views/EditPost";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth type="login" />} />
          <Route path="/signup" element={<Auth type="signup" />} />
          <Route path="/app" element={<Main />} />
          <Route path="/app/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
      <div
        style={{ backgroundImage: "url(/img/bg.webp)" }}
        className="bg"
      ></div>
    </div>
  );
}

export default App;
