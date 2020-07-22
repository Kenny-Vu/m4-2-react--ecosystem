import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import ItemDetails from "./ItemDetails";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
