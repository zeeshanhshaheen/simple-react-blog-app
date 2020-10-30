import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>

            <Link className="btn btn-outline-light" to="/add">
              Create Post
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
