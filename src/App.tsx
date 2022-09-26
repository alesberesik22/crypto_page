import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
