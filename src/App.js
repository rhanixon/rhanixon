import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Writing from "./components/Writing";
import Fast from "./components/Fast";
import Error from "./components/Error";
// import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route exact path="/Writing" component={Writing} />
            <Route exact path="/Writing/Fast" component={Fast} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
