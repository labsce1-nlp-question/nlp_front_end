import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import "./App.css";

import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
