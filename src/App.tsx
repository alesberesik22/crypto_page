import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Exchanges from "./components/Exchanges/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies/Cryptocurrencies";
import News from "./components/News/News";
import Cryptodetails from "./components/Cryptodetails/Cryptodetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinID" element={<Cryptodetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
