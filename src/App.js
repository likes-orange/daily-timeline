import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TimelineCardList from "./components/timelineCardList";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <TimelineCardList />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
