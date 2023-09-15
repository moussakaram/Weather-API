import React, { Component, useEffect, useState } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Main-App";
import Footer from "./components/Footer";

import FakeWeather from "./data/FakeWeather.json";
import axios from "axios";

const App = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b2525d8f8c6994732b06fc6637c4087a"
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <body className="app">
      <Header />
      <Body Data={FakeWeather} />
      <Footer Data={FakeWeather} />
    </body>
  );
};

export default App;