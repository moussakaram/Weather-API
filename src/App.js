import React, { Component, useState } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Main-App";
import Footer from "./components/Footer";

import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wdata: "",
      name: "",
      tempMax: "",
      tempMin: "",
      description: "",
      pressure: "",
      humidity: "",
    };
  }

  // FakeWeather =async()=>{
  // const inputWeather =async()=>{
  // const element =document.getElementsByClassName("app-input");
  // if (element[0]===""){
  // return 0;
  // }
  // }
  // let response = await fetch("FakeWeather");
  // let data = await response.json();

  render() {
    return (
      <body className="app">
        <Header />
        <Body Data={FakeWeather} />
        <Footer Data={FakeWeather} />
      </body>
    );
  }
}

export default App;
