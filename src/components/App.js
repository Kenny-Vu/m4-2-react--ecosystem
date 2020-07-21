import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          Homepage
        </Route>
        <Route path="/about">About</Route>
      </Switch>
    </Router>
  );
};

export default App;
