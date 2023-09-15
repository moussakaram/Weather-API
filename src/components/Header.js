import React, { Component } from "react";
import Search from "./Search";

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
        <button className="app-button" onClick={fetch}>FIND WEATHER </button>
      </header>
    );
  }
}
export default Header;
