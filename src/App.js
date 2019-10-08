// Config:
import React, { Component } from "react";
import "./styles/main.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import ladies from "./seeds/ladiesdb";
import men from "./seeds/mendb";
import pairs from "./seeds/pairsdb";
import icedance from "./seeds/icedancedb";
import Gallery from "./components/Gallery";

// Pages:
import About from "./pages/About";
// import Gallery from "./pages/Gallery";
import Gp101 from "./pages/Gp101";
import Glossary from "./pages/Glossary";
import Home from "./pages/Home";
import SkaterDetails from "./components/SkaterDetails";

// Components:
// import Navbar from "./components/Navbar.jsx";

class App extends Component {
  state = {
    men: men,
    ladies: ladies,
    pairs: pairs,
    icedance: icedance
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gp101" component={Gp101} />
          <Route path="/glossary" component={Glossary} />
          <Route
            path="/men"
            render={() => <Gallery skaters={this.state.men} />}
          />
          <Route
            path="/ladies"
            render={() => <Gallery skaters={this.state.ladies} />}
          />
          <Route
            path="/pairs"
            render={() => <Gallery skaters={this.state.pairs} />}
          />
          <Route
            path="/icedance"
            render={() => <Gallery skaters={this.state.icedance} />}
          />
          <Route path="/skaters/:discipline/:_id" component={SkaterDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
