import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper active">
          <NavLink to="/" className="brand-logo">
            ContactApp
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
