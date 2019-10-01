// Config:
import React from "react";
import "./styles/main.scss";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages:
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Gp101 from "./pages/Gp101";
import Home from "./pages/Home";

// Components:
// import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/gp101" component={Gp101} />
      </Switch>
    </div>
  );
}

export default App;
