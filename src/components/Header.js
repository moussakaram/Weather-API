// try 01
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <header className="header-app">
        <input className="app-input" placeholder="Type in a city name" />
        <button className="app-button">FIND WEATHER </button>
      </header>
    );
  }
}
export default Header;
