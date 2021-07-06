import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Fav from "./components/Fav";
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/fav">
           <Fav />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
