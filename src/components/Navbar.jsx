import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink className="nav-link" exact to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/gp101">
          Grand Prix 101
        </NavLink>
        <NavLink className="nav-link" to="/ladies">
          Ladies
        </NavLink>
        <NavLink className="nav-link" to="/men">
          Men
        </NavLink>
        <NavLink className="nav-link" to="/pairs">
          Pairs
        </NavLink>
        <NavLink className="nav-link" to="/icedance">
          Ice Dance
        </NavLink>
      </nav>
    );
  }
}
