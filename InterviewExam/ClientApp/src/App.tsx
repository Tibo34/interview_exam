import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home/Home";

export default class App extends Component {
  render() {
    return <Route exact path="/" component={Home} />;
  }
}
