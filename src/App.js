import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AnotherPage from "./pages/AnotherPage";
import { DataProvider } from "./contexts/dataContext";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className="App">
          <div className="App-header">
            <ul className="ul-style">
              <NavLink
                to="/"
                className="App-Link"
                activeStyle={{ color: "yellow", borderColor: "yellow" }}
                exact
              >
                <li className="li-style">Home</li>
              </NavLink>

              <NavLink
                to="/another"
                className="App-Link"
                activeStyle={{ color: "yellow", borderColor: "yellow" }}
                exact
              >
                <li className="li-style">Page 2</li>
              </NavLink>
            </ul>
            <Route path="/" exact component={HomePage} />
            <Route path="/another" exact component={AnotherPage} />
          </div>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
