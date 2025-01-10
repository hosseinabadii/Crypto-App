import React from "react";
import { Routes, Route } from "react-router-dom";
import { Typography } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryproDetails,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryproDetails />} />
          </Routes>
        </div>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto App <br />
            All rights reserved
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default App;
