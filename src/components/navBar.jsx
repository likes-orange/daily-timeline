import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Daily Timeline</span>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
