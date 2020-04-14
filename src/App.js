import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Writing from "./components/Writing";
import Fast from "./components/Fast";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Writing" component={Writing} />
            <Route exact path="/Fast" component={Fast} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
